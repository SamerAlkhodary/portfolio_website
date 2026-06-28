import Consts from '../../consts';

const useStyles = {
	section: {
		backgroundColor: Consts.theme.secondary,
		padding: 'clamp(3rem, 7vw, 5rem) clamp(1.25rem, 6vw, 3rem)',
		boxSizing: 'border-box',
		borderTop: '1px solid rgba(238, 194, 131, 0.25)',
	},
	inner: { maxWidth: 760, margin: '0 auto' },
	title: { color: Consts.theme.primary, textAlign: 'center', marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)' },
	list: { display: 'flex', flexDirection: 'column', gap: '0.75rem' },
	q: { color: Consts.theme.primary },
	a: { color: 'rgba(255,255,255,0.78)', lineHeight: 1.6 },
};

// Dark-themed MUI Accordion (no default paper look, gold expand icon).
export const accordionSx = {
	backgroundColor: 'rgba(255,255,255,0.04)',
	color: Consts.theme.primary,
	border: '1px solid rgba(255,255,255,0.08)',
	borderRadius: '6px !important',
	boxShadow: 'none',
	'&:before': { display: 'none' },
	'& .MuiAccordionSummary-root': { padding: '0.4rem 1.1rem' },
	'& .MuiAccordionDetails-root': { padding: '0 1.1rem 1.1rem' },
};

export default useStyles;
