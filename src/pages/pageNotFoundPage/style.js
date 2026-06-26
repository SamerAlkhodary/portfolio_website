import Consts from '../../consts';

const useStyles = {
	page:{
		backgroundColor: Consts.theme.secondary,
	},
	code: {
		color: Consts.theme.primary,
		lineHeight: 1,
		margin: 0,
	},
	h1: {
		textAlign: 'center',
		color: Consts.theme.primary,
		paddingLeft: '1em',
		paddingRight: '1em',
	},
	button: {
		marginTop: '1em',
		backgroundColor: Consts.theme.accent,
		color: Consts.theme.secondary,
		padding: '0.6em 2em',
	},
	pageNotfound:{
		flex:1,
		justifyContent:'center',
		height:'100vh',
		display:'flex',
		alignItems:'center',
		flexDirection:'column',
		gap:'0.6em',
		backgroundColor: Consts.theme.secondary,
	},
};
export default useStyles;
