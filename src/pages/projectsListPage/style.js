import Consts from '../../consts';

const useStyles = {
	page:{
		backgroundColor: Consts.theme.secondary,
		minHeight:'100vh',
		paddingTop:'6em',
		paddingBottom:'4em',
		paddingLeft:'1em',
		paddingRight:'1em',
		display:'flex',
		flexDirection:'column',
		gap:'2em',
	},
	title:{
		alignSelf:'center',
		color: Consts.theme.primary,
		textAlign:'center',
	},
	filters:{
		alignSelf:'center',
		display:'flex',
		flexWrap:'wrap',
		justifyContent:'center',
		gap:'0.8em',
	},
	chip:{
		backgroundColor:'transparent',
		border:`2px solid ${Consts.theme.accent}`,
		borderRadius:'2em',
		padding:'0.3em 1.4em',
	},
	chipActive:{
		backgroundColor: Consts.theme.accent,
		border:`2px solid ${Consts.theme.accent}`,
		borderRadius:'2em',
		padding:'0.3em 1.4em',
	},
	grid:{
		maxWidth:'1100px',
		width:'100%',
		alignSelf:'center',
		display:'grid',
		gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))',
		gap:'1.5em',
	},
	empty:{
		alignSelf:'center',
		color: Consts.theme.primary,
		opacity:0.7,
		paddingTop:'2em',
	},
};

export default useStyles;
