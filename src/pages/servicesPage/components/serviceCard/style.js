import Consts from '../../../../consts';

const useStyles = {
	cardDesktop:{
		backgroundColor:Consts.theme.secondary,
		width:'100vw',
		display: 'flex',
		gap:'10em',
		flex:1,
		justifyContent:'center',

	},
	imgMobile:{
		width:'80%',
		height:'auto',
		borderRadius:'0.5em',

	},
	imgDesktop:{
		width:'30em',
		height:'auto',
		borderRadius:'0.8em',
	},
	textColumnDesktop:{
		flexDirection:'column',
		display:'flex',
		gap:'2em',
		width:'30%',
		justifyContent:'center'

	
	},
	textColumnMobile:{
		flexDirection:'column',
		display:'flex',
		gap:'1em',
		width:'80%',
		justifyContent:'center',
		alignContent:'center',
	
	},
	cardMobile:{
		backgroundColor:Consts.theme.secondary,
		width:'100vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent:'center',
		alignItems:'center',
		gap:'2em',
	},
	txt:{
		color: Consts.theme.primary
	},
	highlightList:{
		margin:0,
		paddingLeft:'1.2em',
		display:'flex',
		flexDirection:'column',
		gap:'0.4em',
	},
	highlightItem:{
		color: Consts.theme.accent,
	},
	highlightText:{
		color: Consts.theme.primary,
	},
};

export default useStyles;
