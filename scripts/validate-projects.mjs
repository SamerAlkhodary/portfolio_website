// Pre-deploy guard for project content.
//
// Adding a project means coordinating three things by hand — the data object in
// projects.js, the image files on disk, and the caption strings in BOTH locales.
// Every mistake there fails SILENTLY in the browser (a broken image, or a raw
// key like "counterCaption" shown to visitors). This script turns those silent
// failures into a loud, specific message and a non-zero exit, so a broken
// project can't reach production.
//
//   node scripts/validate-projects.mjs
//
// It is wired into `predeploy`, so `yarn deploy` runs it first.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IMG = path.join(root, 'public/assets/images/projects');

// --- Load the ESM data modules without a bundler -----------------------------
// projects.js / strings.js use `export` syntax in a CommonJS package, so we
// can't require() them. Strip the import/export keywords and run the rest in a
// throwaway VM context to read the plain objects out. strings.js only touches
// jotai INSIDE useTranslate() (never at load), so the stripped module is inert.
function loadModule(relPath, captureVar) {
	let code = fs.readFileSync(path.join(root, relPath), 'utf8')
		.replace(/^\s*import .*$/gm, '')
		.replace(/export default [^;]+;?/g, '')
		.replace(/export\s+/g, '');
	const sandbox = { __out: null };
	vm.createContext(sandbox);
	vm.runInContext(`${code}\n; __out = ${captureVar};`, sandbox);
	return sandbox.__out;
}

const projects = loadModule('src/pages/projectsPage/expandedProjectPage/projects.js', 'projects');
const Strings = loadModule('src/res/strings/strings.js', 'Strings');
const LOCALES = Object.keys(Strings); // ['en-US', 'hu-HU']

const errors = [];
const warnings = [];
const err = (id, msg)=> errors.push(`  ✗ [project ${id}] ${msg}`);
const warn = (id, msg)=> warnings.push(`  ! [project ${id}] ${msg}`);

const fileExists = (...parts)=> fs.existsSync(path.join(IMG, ...parts));

// A caption/name/type key must resolve in projectsInfo for EVERY locale,
// otherwise visitors in that language see the raw key text.
const captionMissingIn = (key)=>
	LOCALES.filter(loc => !Strings[loc]?.projectsInfo || !(key in Strings[loc].projectsInfo));

function checkKey(id, key, label) {
	if (!key) { err(id, `${label} is empty`); return; }
	const missing = captionMissingIn(key);
	if (missing.length) err(id, `${label} "${key}" missing in: ${missing.join(', ')}`);
}

for (const p of projects) {
	const id = p.id ?? '(no id)';

	// Hero images (drive the detail hero + every card across the site).
	for (const slot of ['hero_desktop', 'hero_mobile']) {
		if (!fileExists(id, `${slot}.webp`)) err(id, `missing ${slot}.webp`);
	}

	// Copy keys.
	checkKey(id, p.name, 'name');
	checkKey(id, p.description, 'description');
	checkKey(id, p.type, 'type');

	// Floor area shows in the hero spec line; not fatal, but flag it.
	if (p.area == null) warn(id, 'no `area` (m²) — hero spec line will omit it');

	const hasAreas = Array.isArray(p.areas) && p.areas.length > 0;
	const hasStages = Array.isArray(p.stages) && p.stages.length > 0;

	if (hasAreas && hasStages) err(id, 'has BOTH `areas` and `stages` — pick one');
	if (!hasAreas && !hasStages) err(id, 'has neither `areas` nor `stages` — nothing to show');

	// Areas: every area needs after.webp; a `before` area also needs before.webp.
	if (hasAreas) {
		for (const a of p.areas) {
			if (!a.name) { err(id, 'an area has no `name`'); continue; }
			checkKey(id, a.caption, `area "${a.name}" caption`);
			if (!fileExists(id, 'areas', a.name, 'after.webp')) err(id, `areas/${a.name}/after.webp missing`);
			if (a.before && !fileExists(id, 'areas', a.name, 'before.webp')) {
				err(id, `area "${a.name}" has before:true but areas/${a.name}/before.webp is missing`);
			}
		}
	}

	// Stages: keep the flat <folder>/<id>.webp layout.
	if (hasStages) {
		for (const s of p.stages) {
			checkKey(id, s.caption, 'stage caption');
			if (!fileExists(id, s.folder, `${s.id}.webp`)) err(id, `${s.folder}/${s.id}.webp missing`);
		}
	}
}

// --- Report ------------------------------------------------------------------
if (warnings.length) {
	console.log(`\nProject content — ${warnings.length} warning(s):`);
	console.log(warnings.join('\n'));
}

if (errors.length) {
	console.error(`\nProject content INVALID — ${errors.length} error(s):`);
	console.error(errors.join('\n'));
	console.error('\nFix the above before deploying.\n');
	process.exit(1);
}

console.log(`\n✓ Project content OK — ${projects.length} project(s), ${LOCALES.join(' + ')} locales, all images and captions present.\n`);
