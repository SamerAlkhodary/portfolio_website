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
	ctaRow:{
		display:'flex',
		flexDirection:'row',
		gap:'1.5em',
		flexWrap:'wrap',
		justifyContent:'center',
		paddingTop:'1em',
	},
	ctaColumn:{
		display:'flex',
		flexDirection:'column',
		gap:'1em',
		alignItems:'stretch',
		width:'80%',
		paddingTop:'1em',
	},
	primaryCta:{
		backgroundColor: Consts.theme.accent,
		color: Consts.theme.secondary,
		padding:'0.6em 2em',
		minWidth:'13em',
	},
	secondaryCta:{
		backgroundColor:'transparent',
		border:`2px solid ${Consts.theme.accent}`,
		color: Consts.theme.primary,
		padding:'0.6em 2em',
		minWidth:'13em',
	},
};

export default useStyles;
