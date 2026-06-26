import Consts from '../../consts';

const useStyles = {
	contactPage:{
		paddingTop:'4em',
		paddingBottom:'4em',
		backgroundColor: Consts.theme.secondary,
		display:'flex',
		flexDirection:'column',
		gap:'1.5em',
		alignItems:'center',
	},
	title:{
		textAlign:'center',
		color: Consts.theme.primary,
	},
	prompt:{
		textAlign:'center',
		color: Consts.theme.primary,
		maxWidth:'34em',
		paddingLeft:'1.5em',
		paddingRight:'1.5em',
	},
};

export default useStyles;
