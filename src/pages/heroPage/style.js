import Consts from '../../consts';

const useStyles = {
	
	container: {
		width: '100%',
		height: '100vh',
		backgroundColor:Consts.theme.secondary,
		position:'relative',

	},
	hero: {
		width: '100%',
		height: '100vh',
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
		display:'flex',
		gap:'3em',
		height:'100%',
		backgroundColor:'transparent',
		flexDirection:'column',
		alignSelf:'center',
		justifyContent:'center',
		position:'absolute',
		top:'1em',
		left:'1em',
		right:'1em',
		bottom:'1em',},

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
