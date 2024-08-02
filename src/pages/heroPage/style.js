import Consts from '../../consts';

const useStyles = {
	
	container: {
		width: '100%',
		height: '100vh',
		backgroundColor:'transparent',

	},
	hero: {
		width: '100%',
		height: '100%',
		opacity: '0.5',
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
	button: {
		backgroundColor:'#EEC283',
		width:'16em',
		alignSelf:'center',
		color: Consts.theme.secondary,
		
	},

	texts:{
		alignItems:'center',
		display:'flex',
		gap:'3em',
		height:'100%',
		backgroundColor:'transparent',
		flexDirection:'column',
		alignSelf:'center',
		justifyContent:'center'},

	textsMobile:{ 
		top:'3em',
		left:'1em',
		bottom:'3em',
		right:'1em',
		position:'absolute',
		display:'flex',
		gap:'3em',
		flexDirection:'column',
		justifyContent:'center'}
};

export default useStyles;
