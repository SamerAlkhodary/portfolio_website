import Consts from '../../consts';

const useStyles = {
	wrap:{
		backgroundColor:Consts.theme.secondary,
		display:'flex',
		flexDirection:'column',
		alignItems:'center',
		textAlign:'center',
		gap:'0.6em',
		padding:'3.5em 1.5em',
		borderTop:'1px solid rgba(238, 194, 131, 0.25)',
		borderBottom:'1px solid rgba(238, 194, 131, 0.25)',
	},
	title:{
		color:Consts.theme.primary,
	},
	text:{
		color:Consts.theme.primary,
		opacity:0.8,
		maxWidth:'34em',
	},
};

export default useStyles;
