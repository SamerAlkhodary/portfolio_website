import Consts from '../../consts';

// Compact home teaser: two cards that link to the /how-we-work and /faq pages,
// so the topics are discoverable while scrolling (especially on mobile, where the
// nav is behind the burger) without putting the full content back on the home page.
const useStyles = {
	section: {
		backgroundColor: Consts.theme.secondary,
		padding: 'clamp(3rem, 7vw, 4.5rem) clamp(1.25rem, 6vw, 3rem)',
		boxSizing: 'border-box',
		borderTop: '1px solid rgba(238, 194, 131, 0.25)',
	},
	inner: { maxWidth: 1000, margin: '0 auto' },
	title: { color: Consts.theme.primary, textAlign: 'center', marginBottom: 'clamp(1.5rem, 4vw, 2.25rem)' },
	cards: { display: 'grid', gap: 'clamp(1rem, 3vw, 1.6rem)' },
	card: {
		backgroundColor: 'rgba(255,255,255,0.04)',
		border: '1px solid rgba(255,255,255,0.08)',
		borderRadius: 8,
		padding: 'clamp(1.4rem, 3vw, 2rem)',
		cursor: 'pointer',
		display: 'flex',
		flexDirection: 'column',
		gap: '0.6em',
		textAlign: 'left',
	},
	cardTitle: { color: Consts.theme.primary },
	cardDesc: { color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, flex: 1 },
	cardCta: { color: Consts.theme.accent, fontWeight: 'bold', marginTop: '0.3em' },
};

export default useStyles;
