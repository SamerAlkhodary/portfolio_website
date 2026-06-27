// Design tokens for the project detail page ("The Reveal").
// Warm near-black so the gold reads as brass, not neon.
const T = {
	bg: '#1b1a18',
	panel: '#262421',
	gold: '#EEC283',
	light: '#F4F1EA',
	muted: '#9a958c',
	line: 'rgba(244,241,234,0.14)',
};

const grotesk = '"Space Grotesk", "Merriweather", sans-serif';

const eyebrowBase = {
	fontFamily: grotesk,
	textTransform: 'uppercase',
	letterSpacing: '0.22em',
	fontSize: '0.72rem',
	fontWeight: 500,
	margin: 0,
};

const useStyles = {
	page: {
		backgroundColor: T.bg,
	},

	// Centered content column for every section below the full-bleed hero.
	section: {
		maxWidth: 1120,
		margin: '0 auto',
		padding: '0 clamp(1.25rem, 6vw, 3rem)',
		boxSizing: 'border-box',
	},

	// --- Hero -----------------------------------------------------------
	hero: {
		position: 'relative',
		width: '100%',
		height: '72vh',
		minHeight: 420,
		maxHeight: 760,
		overflow: 'hidden',
	},
	heroImg: {
		position: 'absolute',
		inset: 0,
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		objectPosition: 'center',
		display: 'block',
	},
	heroScrim: {
		position: 'absolute',
		inset: 0,
		background:
			'linear-gradient(180deg, rgba(27,26,24,0.10) 0%, rgba(27,26,24,0.04) 36%, rgba(27,26,24,0.80) 84%, rgba(27,26,24,0.97) 100%)',
	},
	heroContent: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		padding: '0 clamp(1.25rem, 6vw, 3rem) clamp(2rem, 5vw, 3.4rem)',
		boxSizing: 'border-box',
	},
	heroInner: {
		maxWidth: 1120,
		margin: '0 auto',
		display: 'flex',
		flexDirection: 'column',
		gap: '0.55em',
	},
	heroEyebrow: {
		...eyebrowBase,
		color: T.gold,
	},
	heroTitle: {
		color: T.light,
		margin: 0,
		lineHeight: 1.04,
	},
	heroDesc: {
		color: 'rgba(244,241,234,0.82)',
		maxWidth: 620,
		margin: '0.2em 0 0',
		lineHeight: 1.5,
	},

	// --- Section header -------------------------------------------------
	secHeader: {
		display: 'flex',
		flexDirection: 'column',
		gap: '0.4em',
	},
	eyebrow: {
		...eyebrowBase,
		color: T.gold,
	},
	secTitle: {
		color: T.light,
		margin: 0,
	},

	// --- Transformation story (reveal pairs) ----------------------------
	storyWrap: {
		display: 'flex',
		flexDirection: 'column',
		gap: 'clamp(2.5rem, 6vw, 4.5rem)',
		marginTop: 'clamp(2rem, 5vw, 3.2rem)',
	},
	storyRow: {
		display: 'flex',
		gap: 'clamp(1.5rem, 4vw, 3.5rem)',
		alignItems: 'center',
	},
	storyText: {
		flex: '1 1 0',
		display: 'flex',
		flexDirection: 'column',
		gap: '0.55em',
		minWidth: 0,
	},
	storyKicker: {
		fontFamily: grotesk,
		textTransform: 'uppercase',
		letterSpacing: '0.18em',
		fontSize: '0.7rem',
		fontWeight: 500,
		color: T.muted,
		margin: 0,
	},
	storyArea: {
		color: T.light,
		margin: 0,
	},
	storyHint: {
		fontFamily: grotesk,
		fontSize: '0.78rem',
		color: T.muted,
		margin: '0.2em 0 0',
		display: 'flex',
		alignItems: 'center',
		gap: '0.5em',
	},
	revealHold: {
		flex: '0 0 auto',
		width: 'min(420px, 100%)',
	},

	// --- Reveal figure --------------------------------------------------
	revealFigure: {
		position: 'relative',
		width: '100%',
		aspectRatio: '3 / 4',
		overflow: 'hidden',
		borderRadius: 6,
		background: T.panel,
		cursor: 'ew-resize',
		userSelect: 'none',
		touchAction: 'none',
		boxShadow: '0 26px 60px -30px rgba(0,0,0,0.75)',
	},
	revealImg: {
		position: 'absolute',
		inset: 0,
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		objectPosition: 'center',
		display: 'block',
		pointerEvents: 'none',
	},
	revealClip: {
		position: 'absolute',
		inset: 0,
		overflow: 'hidden',
	},
	revealSeam: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		width: 2,
		marginLeft: -1,
		background: T.gold,
		boxShadow: '0 0 14px rgba(238,194,131,0.65)',
	},
	revealKnob: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 38,
		height: 38,
		borderRadius: '50%',
		background: T.gold,
		color: '#1b1a18',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontFamily: grotesk,
		fontWeight: 700,
		fontSize: 15,
		letterSpacing: '0.05em',
		boxShadow: '0 4px 14px rgba(0,0,0,0.45)',
	},
	revealTab: {
		position: 'absolute',
		top: '0.7em',
		padding: '0.28em 0.6em',
		borderRadius: 3,
		fontFamily: grotesk,
		textTransform: 'uppercase',
		letterSpacing: '0.12em',
		fontSize: '0.6rem',
		fontWeight: 600,
		background: 'rgba(20,19,17,0.55)',
		color: T.light,
		pointerEvents: 'none',
	},

	// --- Process timeline (ordered stages) ------------------------------
	timelineWrap: {
		marginTop: 'clamp(2rem, 5vw, 3.2rem)',
	},
	timelineItem: {
		display: 'flex',
		gap: 'clamp(1rem, 3.5vw, 2.25rem)',
	},
	timelineCol: {
		flex: '0 0 44px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	timelineNode: {
		flex: '0 0 auto',
		width: 44,
		height: 44,
		borderRadius: '50%',
		border: `1px solid ${T.gold}`,
		color: T.gold,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontFamily: grotesk,
		fontWeight: 700,
		fontSize: 14,
		background: 'rgba(238,194,131,0.06)',
		boxSizing: 'border-box',
	},
	timelineNodeDone: {
		background: T.gold,
		color: '#1b1a18',
	},
	timelineLine: {
		width: 1,
		flex: 1,
		minHeight: 24,
		marginTop: 8,
		marginBottom: 8,
		background: T.line,
	},
	timelineBody: {
		flex: 1,
		minWidth: 0,
		paddingBottom: 'clamp(2rem, 5vw, 3.25rem)',
		display: 'flex',
		flexDirection: 'column',
		gap: '0.85em',
	},
	timelineStage: {
		fontFamily: grotesk,
		textTransform: 'uppercase',
		letterSpacing: '0.16em',
		fontSize: '0.66rem',
		fontWeight: 500,
		color: T.muted,
		margin: 0,
	},
	timelineArea: {
		color: T.light,
		margin: '0.1em 0 0',
	},
	timelineImgHold: {
		width: 'min(440px, 100%)',
		aspectRatio: '3 / 4',
		overflow: 'hidden',
		borderRadius: 6,
		background: T.panel,
		cursor: 'pointer',
		marginTop: '0.3em',
		boxShadow: '0 22px 54px -32px rgba(0,0,0,0.7)',
	},
	imgCover: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		objectPosition: 'center',
	},

	// --- Finished gallery ----------------------------------------------
	galleryWrap: {
		marginTop: 'clamp(2rem, 5vw, 3.2rem)',
		marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
	},
	galleryGrid: {
		display: 'grid',
		gap: 'clamp(1rem, 3vw, 1.6rem)',
	},
	galleryItem: {
		position: 'relative',
		aspectRatio: '4 / 5',
		overflow: 'hidden',
		borderRadius: 6,
		background: T.panel,
		cursor: 'pointer',
		boxShadow: '0 22px 54px -32px rgba(0,0,0,0.7)',
	},
	galleryScrim: {
		position: 'absolute',
		inset: 0,
		background: 'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(20,19,17,0.78) 100%)',
		pointerEvents: 'none',
	},
	galleryCap: {
		position: 'absolute',
		left: '1em',
		bottom: '0.85em',
		fontFamily: grotesk,
		textTransform: 'uppercase',
		letterSpacing: '0.14em',
		fontSize: '0.68rem',
		fontWeight: 600,
		color: T.gold,
		margin: 0,
		pointerEvents: 'none',
	},

	// Retained for the 404 fallback in expandedProjectPage.
	pageNotfound: {
		flex: 1,
		justifyContent: 'center',
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		gap: '1em',
	},
};

export default useStyles;
