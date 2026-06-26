import Consts from '../../consts';

const useStyles = {
	row:{
		display:'flex',
		flexDirection:'row',
		gap:'1.5em',
		flexWrap:'wrap',
		justifyContent:'center',
		paddingTop:'1em',
	},
	column:{
		display:'flex',
		flexDirection:'column',
		gap:'1em',
		alignItems:'stretch',
		width:'80%',
		paddingTop:'1em',
	},
	primary:{
		backgroundColor: Consts.theme.accent,
		color: Consts.theme.secondary,
		padding:'0.6em 2em',
		minWidth:'13em',
	},
	secondary:{
		backgroundColor:'transparent',
		border:`2px solid ${Consts.theme.accent}`,
		color: Consts.theme.primary,
		padding:'0.6em 2em',
		minWidth:'13em',
	},
};

export default useStyles;
