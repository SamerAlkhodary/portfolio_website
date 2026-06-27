// ── Trust / credibility figures (issue #51 · TRU-1) ─────────────────────────
// These feed the home-page stats band. They are the firm's real totals, owner-
// supplied, because the body of work is young and the numbers already cover
// every project (summing per-project areas on top would double-count).
//
// When you complete a new project, bump `projects` and `area` here. Each
// project's own `area` in projects.js is separate — it only drives that
// project's hero line, not this band.
export const TRUST = {
	foundingYear: 2024, // first year of operation → drives "years in business"
	projects: 8,        // completed projects to date
	area: 1200,         // m² built/renovated to date (approx.)
	cities: 5,          // distinct cities/towns worked in (Budapest, Dunakeszi, …)
	// ⚠️ TODO(owner): confirm `cities` — how many distinct towns/cities total?
};

// Builds the four band stats. `years` is derived so it stays current on its own.
export const computeTrustStats = ()=> ({
	years: new Date().getFullYear() - TRUST.foundingYear,
	projects: TRUST.projects,
	area: TRUST.area,
	cities: TRUST.cities,
});
