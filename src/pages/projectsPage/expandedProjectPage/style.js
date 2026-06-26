import Consts from '../../../consts';

const useStyles = {
	page:{
		backgroundColor: Consts.theme.secondary,
		alignItems: 'center',
		
	},
	h1: {
		textAlign: 'center',
		color: 'white',
	},
	sectionTitle: {
		color: 'white',
		paddingLeft: '0.7em',
		paddingTop: '1em',
		paddingBottom: '0.3em',
	},
	pageNotfound:{
		flex:1,
		justifyContent:'center',
		height:'100vh',
		display:'flex',
		alignItems:'center',
		flexDirection:'column',
		gap:'1em'},

};

export default useStyles;
