import Consts from '../../consts';

// A quiet dark strip with a single gold hairline on top to separate it from the
// About section above. Numbers are the loud element (gold, Merriweather); the
// labels stay small and calm so the figures do the talking.
const useStyles = {
	band: {
		backgroundColor: Consts.theme.secondary,
		borderTop: `1px solid ${Consts.theme.accent}`,
		padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 6vw, 3rem)',
		boxSizing: 'border-box',
	},
	grid: {
		maxWidth: 1120,
		margin: '0 auto',
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gap: 'clamp(1.75rem, 4vw, 2.5rem)',
		textAlign: 'center',
	},
	item: {
		display: 'flex',
		flexDirection: 'column',
		gap: '0.35em',
		alignItems: 'center',
	},
	value: {
		color: Consts.theme.accent,
		lineHeight: 1,
		fontSize: 'clamp(2rem, 6vw, 3rem)',
		margin: 0,
	},
	label: {
		color: 'rgba(255,255,255,0.78)',
		textTransform: 'uppercase',
		letterSpacing: '0.14em',
		fontSize: 'clamp(0.66rem, 1.6vw, 0.78rem)',
		fontWeight: 500,
		margin: 0,
	},
};

export default useStyles;
