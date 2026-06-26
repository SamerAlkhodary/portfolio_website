import Consts from '../../consts';

const useStyles ={
	projectsPage:{
		backgroundColor:Consts.theme.secondary,
		paddingBottom:'5em',
		paddingTop: '2em',
		paddingLeft:'1em',
		paddingRight:'1em',
		display:'flex',
		flexDirection:'column',
		gap:'2em'
	},
	grid:{
		maxWidth:'1100px',
		width:'100%',
		alignSelf:'center',
		display:'grid',
		gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))',
		gap:'1.5em',
	},
	viewAll:{
		alignSelf:'center',
		backgroundColor:'transparent',
		border:`2px solid ${Consts.theme.accent}`,
		padding:'0.6em 2em',
	},
	title:{
		alignSelf:'center',
		color: Consts.theme.primary,
		textAlign:'center',
	}


};

export default useStyles;
