import Consts from '../../../consts';

const useStyles = {
	container: {
		width: '100%',
		height: '60vh',
		backgroundColor: Consts.theme.secondary,
		position:'relative'
	},
	page:{
		width: '100%',
		height: '100vh',
		backgroundColor: Consts.theme.secondary,
		justifyContent:'start',
		flex:1,
		flexDirection:'column',
		display: 'flex',

	},
	iconRow:{
		flexDirection:'row',
		display:'flex',
		justifyContent:'space-around'

	},
	info:{
		top:'0em',
		left: '0.5em',
		right:'0.5em',
		height: '100%',
		position:'absolute',
		flexDirection:'column',
		display:'flex',
		flex:1,
		justifyContent:'space-around'


	},
	iconItem:{
		flexDirection:'column',
		display:'flex',
		justifyContent:'center',
		

	},
	texts:{ 
		
		display:'flex',
		gap:'1.5em',
		flexDirection:'column',
		justifyContent:'center'
	},
	hero: {
		width: '100%',
		height: '100%',
		opacity: '0.4',
		objectFit: 'cover',
	},
	h1: {
		textAlign: 'center',
		color: 'white',
	},
	h2: {
		textAlign: 'center',
		color: 'white',
	},
	
};

export default useStyles;
