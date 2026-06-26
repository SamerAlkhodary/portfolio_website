import Consts from '../../../../consts';

const useStyles = {
	wrap:{
		display:'flex',
		flexDirection:'column',
		gap:'1.8em',
		paddingTop:'5em',
		paddingLeft:'1.5em',
		paddingRight:'1.5em',
	},
	heading:{
		color:Consts.theme.accent,
		textTransform:'uppercase',
		letterSpacing:'0.18em',
		alignSelf:'center',
	},
	stripDesktop:{
		display:'flex',
		flexDirection:'row',
		gap:'2.5em',
		justifyContent:'center',
		maxWidth:'72em',
		alignSelf:'center',
	},
	stripMobile:{
		display:'flex',
		flexDirection:'column',
		gap:'1.4em',
	},
	stepDesktop:{
		flex:1,
		maxWidth:'15em',
		display:'flex',
		flexDirection:'column',
		gap:'0.6em',
		paddingTop:'1em',
		borderTop:'2px solid rgba(238, 194, 131, 0.35)',
	},
	stepMobile:{
		display:'flex',
		flexDirection:'row',
		gap:'1em',
		alignItems:'baseline',
		paddingTop:'1em',
		borderTop:'2px solid rgba(238, 194, 131, 0.35)',
	},
	number:{
		color:Consts.theme.accent,
		fontSize:'2.2em',
		lineHeight:1,
	},
	stepText:{
		display:'flex',
		flexDirection:'column',
		gap:'0.3em',
	},
	stepTitle:{
		color:Consts.theme.primary,
	},
	stepDesc:{
		color:Consts.theme.primary,
		opacity:0.75,
	},
};

export default useStyles;
