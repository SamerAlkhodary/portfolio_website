// ── How project images are grouped ──────────────────────────────────────────
// Images live UNDER THE AREA they belong to, with the phase as the filename:
//   /assets/images/projects/<id>/areas/<area>/before.webp
//   /assets/images/projects/<id>/areas/<area>/after.webp
// so a before/after pair can only ever pair with its own area — there are no
// loose numeric ids to mis-map. Build any path with areaImage() below.
//
// A project shows its work one of two honest ways:
//   • areas  — named spaces. An area WITH `before: true` renders as a gold-seam
//              before/after reveal; an area without one is a finished shot shown
//              in the gallery. One list, grouped by place.
//   • stages — an ordered renovation sequence (the numbered timeline), used when
//              the material is progress photos of one space over time, not pairs.
//              These keep a flat /<folder>/<id>.webp layout (e.g. progress/1).

// Resolves an image to its public URL. `area` is the folder under areas/ (e.g.
// 'counter'); `slot` is the filename without extension ('before' | 'after').
export const areaImage = (projectId, area, slot)=>
	`/assets/images/projects/${projectId}/areas/${area}/${slot}.webp`;

const projects = [
	{
		id: '1',
		name: 'midoName',
		description: 'midoDescription',
		category: 'commercial',
		featured: true,
		year: '2024',
		startDate: '2024',
		duration: '', // optional, e.g. '3 months' — shown in the hero eyebrow when set
		location: 'Budapest',
		type: 'midoType',
		areas: [
			{ name: 'counter', caption: 'counterCaption', before: true },
			{ name: 'dining', caption: 'diningCaption', before: true },
			{ name: 'washroom', caption: 'washroomCaption', before: true },
			{ name: 'storefront', caption: 'storefrontCaption' },
			{ name: 'kitchen', caption: 'kitchenCaption' },
		],
	},
	{
		id: '2',
		name: 'barbershopName',
		description: 'barbershopDescription',
		category: 'renovation',
		featured: true,
		year: '2024',
		startDate: '2024',
		duration: '',
		location: 'Budapest',
		type: 'barbershopType',
		stages: [
			{ caption: 'stageEmptyCaption', folder: 'progress', id: 1 },
			{ caption: 'stageStructureCaption', folder: 'progress', id: 2 },
			{ caption: 'stagePlasterCaption', folder: 'progress', id: 3 },
			{ caption: 'stageSurfacesCaption', folder: 'progress', id: 4 },
			{ caption: 'stageDoneCaption', folder: 'progress', id: 5 },
		],
	},
];

// Maps a project category to its i18n key (resolved via translate()).
export const CATEGORY_LABEL = {
	all: 'catAll',
	residential: 'catResidential',
	commercial: 'catCommercial',
	renovation: 'catRenovation',
};

export default projects;
