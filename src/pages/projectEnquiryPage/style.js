import Consts from '../../consts';

// Scoping enquiry section: a calm dark panel with a gold-accented form. Captures
// the project shape (type, area, scope, budget, timeline) so the lead arrives
// pre-qualified — no public price calculator, just a richer "request a quote".
const useStyles = {
	section: {
		backgroundColor: Consts.theme.secondary,
		padding: 'clamp(3rem, 7vw, 5rem) clamp(1.25rem, 6vw, 3rem)',
		boxSizing: 'border-box',
		borderTop: '1px solid rgba(238, 194, 131, 0.25)',
	},
	inner: {
		maxWidth: 760,
		margin: '0 auto',
	},
	title: {
		color: Consts.theme.primary,
		textAlign: 'center',
		marginBottom: '0.5em',
	},
	intro: {
		color: 'rgba(255,255,255,0.72)',
		textAlign: 'center',
		maxWidth: 600,
		margin: '0 auto clamp(2rem, 5vw, 3rem)',
		lineHeight: 1.6,
	},
	gridMobile: {
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: '1.1rem',
	},
	gridDesktop: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: '1.25rem',
	},
	full: { gridColumn: '1 / -1' },
	submitRow: {
		gridColumn: '1 / -1',
		display: 'flex',
		justifyContent: 'center',
		marginTop: '0.5rem',
	},
	submit: {
		backgroundColor: Consts.theme.accent,
		color: Consts.theme.secondary,
		fontFamily: Consts.theme.fontFamily,
		fontWeight: 'bold',
		fontSize: '1em',
		padding: '0.7em 2.4em',
		borderRadius: 4,
		textTransform: 'none',
	},
	thanks: {
		textAlign: 'center',
		padding: 'clamp(2rem, 6vw, 4rem) 0',
	},
	thanksTitle: {
		color: Consts.theme.accent,
		marginBottom: '0.4em',
	},
	thanksBody: {
		color: 'rgba(255,255,255,0.8)',
		maxWidth: 480,
		margin: '0 auto',
		lineHeight: 1.6,
	},
};

// Dark-theme styling for every MUI field (label, text, outline, dropdown arrow),
// with the brand gold on focus.
export const fieldSx = {
	'& .MuiInputBase-root': { color: Consts.theme.primary, backgroundColor: 'rgba(255,255,255,0.04)' },
	'& .MuiInputBase-input::placeholder': { color: 'rgba(255,255,255,0.4)', opacity: 1 },
	'& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.6)' },
	'& .MuiInputLabel-root.Mui-focused': { color: Consts.theme.accent },
	'& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.2)' },
	'&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.4)' },
	'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: Consts.theme.accent },
	'& .MuiSvgIcon-root': { color: 'rgba(255,255,255,0.6)' },
};

export default useStyles;
