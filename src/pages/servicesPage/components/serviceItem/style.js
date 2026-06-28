import Consts from '../../../../consts';

// Editorial service row: no boxes, no generic icons. A gold hairline divider, the
// service name in the display serif, a short line, and the highlights as a clean
// list with gold diamond markers. Uses the site's own language (hairlines +
// Merriweather + gold) so it reads as bespoke, not a templated feature grid.
const useStyles = {
	row: {
		display: 'grid',
		gridTemplateColumns: '1.15fr 1fr',
		gap: 'clamp(1.5rem, 5vw, 4rem)',
		alignItems: 'start',
		padding: 'clamp(2rem, 4vw, 2.75rem) 0',
		borderTop: '1px solid rgba(238, 194, 131, 0.22)',
	},
	rowMobile: {
		display: 'flex',
		flexDirection: 'column',
		gap: '1em',
		padding: '1.75rem 0',
		borderTop: '1px solid rgba(238, 194, 131, 0.22)',
	},
	title: { color: Consts.theme.primary, margin: 0, lineHeight: 1.15 },
	desc: { color: 'rgba(255,255,255,0.66)', margin: '0.55em 0 0', lineHeight: 1.55 },
	thumbLink: { display: 'inline-flex', flexDirection: 'column', gap: '0.45em', cursor: 'pointer', marginTop: '1.1em', alignItems: 'flex-start' },
	thumb: { display: 'block', width: 'min(240px, 100%)', aspectRatio: '16 / 10', objectFit: 'cover', borderRadius: 6, border: '1px solid rgba(255,255,255,0.12)' },
	viewProject: { color: Consts.theme.accent, fontWeight: 'bold' },
	list: { listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55em' },
	item: { display: 'flex', gap: '0.7em', alignItems: 'flex-start' },
	marker: { flex: '0 0 auto', width: 7, height: 7, marginTop: '0.5em', backgroundColor: Consts.theme.accent, transform: 'rotate(45deg)' },
	itemText: { color: 'rgba(255,255,255,0.88)' },
};

export default useStyles;
