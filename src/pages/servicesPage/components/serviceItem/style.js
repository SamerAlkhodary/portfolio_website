import Consts from '../../../../consts';

// Lean service card: a gold icon + title + description + concrete highlight
// bullets. No large stock photo — the real visual proof lives in Projects.
const useStyles = {
	card: {
		backgroundColor: 'rgba(255,255,255,0.04)',
		border: '1px solid rgba(255,255,255,0.08)',
		borderRadius: 8,
		padding: 'clamp(1.6rem, 3vw, 2.2rem)',
		display: 'flex',
		flexDirection: 'column',
		gap: '0.7em',
		height: '100%',
		boxSizing: 'border-box',
	},
	icon: { fontSize: 44, color: Consts.theme.accent },
	title: { color: Consts.theme.primary, marginTop: '0.2em' },
	desc: { color: 'rgba(255,255,255,0.72)', lineHeight: 1.55 },
	list: { listStyle: 'none', margin: '0.5em 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5em' },
	item: { display: 'flex', gap: '0.6em', alignItems: 'flex-start' },
	marker: { flex: '0 0 auto', width: 6, height: 6, marginTop: '0.5em', backgroundColor: Consts.theme.accent, transform: 'rotate(45deg)' },
	itemText: { color: 'rgba(255,255,255,0.85)' },
};

export default useStyles;
