import Consts from '../../consts';

const useStyles = {
	
	container: {
		width: '100%',
		height: '100vh',
		backgroundColor:Consts.theme.secondary,
		position:'relative',
		backgroundSize: 'cover',
		backgroundPosition: 'center', 
		backgroundImage:'url("/assets/images/hero2.webp")',
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
		backgroundColor:'rgba(0, 0, 0, 0.5)',
		display:'flex',
		gap:'3em',
		height:'100%',
		flexDirection:'column',
		alignSelf:'center',
		justifyContent:'center',
		position:'absolute',
		top:'0em',
		left:'0em',
		right:'0em',
		bottom:'0em',},

	textsMobile:{ 
		backgroundColor:'rgba(0, 0, 0, 0.5)',
		top:'0em',
		left:'0em',
		bottom:'0em',
		right:'0em',
		position:'absolute',
		display:'flex',
		gap:'3em',
		flexDirection:'column',
		justifyContent:'center'}
};

export default useStyles;
