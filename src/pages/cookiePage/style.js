import Consts from '../../consts';

const styles = {
	container: {
		maxWidth: '800px',
		margin: 'auto',
		padding: '20px',
		background: Consts.theme.primary,
		borderRadius: '5px',
		boxShadow: '0 0 10px rgba(0,0,0,0.1)',
		fontFamily: 'Arial, sans-serif',
		lineHeight: '1.6',
	},
	heading: {
		color: Consts.theme.secondary,
	},
	subHeading: {
		color: Consts.theme.secondary,
	},
	list: {
		listStyleType: 'disc',
		paddingLeft: '20px',
	},
	link: {
		color: Consts.theme.accent,
		textDecoration: 'none',
	},
	linkHover: {
		textDecoration: 'underline',
	},
	contactLink: {
		color: Consts.theme.accent,
		textDecoration: 'none',
	},
	contactLinkHover: {
		textDecoration: 'underline',
	},
};
export default styles;
  