import Consts from '../../consts';

const useStyles = {
	
	container: {
		width: '100%',
		height: '100vh',
		backgroundColor:'black',
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

	textsDesktop:{
		position:'absolute',
		top:'1em',
		left:'1em',
		right:'1em',
		bottom:'1em',

		display:'flex',
		gap:'3em',
		flexDirection:'column',
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
