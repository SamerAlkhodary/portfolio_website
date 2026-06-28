import Consts from '../../consts';

// "How we price" section: a calm dark panel, two columns — what drives the price
// vs. what we won't do. Gold diamond markers tie it to the brand.
const useStyles = {
	section: {
		backgroundColor: Consts.theme.secondary,
		padding: 'clamp(3rem, 7vw, 5rem) clamp(1.25rem, 6vw, 3rem)',
		boxSizing: 'border-box',
		borderTop: '1px solid rgba(238, 194, 131, 0.25)',
	},
	inner: { maxWidth: 1000, margin: '0 auto' },
	title: { color: Consts.theme.primary, textAlign: 'center', marginBottom: '0.5em' },
	intro: {
		color: 'rgba(255,255,255,0.72)',
		textAlign: 'center',
		maxWidth: 680,
		margin: '0 auto clamp(2rem, 5vw, 3rem)',
		lineHeight: 1.6,
	},
	cols: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 5vw, 4rem)' },
	colsMobile: { display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' },
	colTitle: { color: Consts.theme.accent, marginBottom: '1em' },
	list: { listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.9em' },
	item: { display: 'flex', gap: '0.7em', alignItems: 'flex-start' },
	marker: { flex: '0 0 auto', width: 7, height: 7, marginTop: '0.55em', backgroundColor: Consts.theme.accent, transform: 'rotate(45deg)' },
	itemText: { color: 'rgba(255,255,255,0.85)', lineHeight: 1.55 },
};

export default useStyles;
