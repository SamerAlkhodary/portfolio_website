import Consts from '../../../../consts';

const useStyles={
	container: {
		width: '100%',
		height: '60vh',
		backgroundColor: Consts.theme.secondary,
		position:'relative'
	},
	iconRow:{
		flexDirection:'row',
		display:'flex',
		justifyContent:'space-around'

	},
	imageListDesktop:{
		paddingTop:'0.5em',
		gap:'0.5em',
		flex:1,
		display:'flex',
		flexDirection:'row',
		paddingLeft:'1em',
		paddingRight:'0em',
		justifyContent:'start',
		alignSelf:'center',
		flexWrap: 'wrap'
	},
	imageListMobile:{
		paddingTop:'0.5em',
		flex:1,
		display:'flex',
		flexDirection:'column',
		gap: '0.5em',
		justifyContent:'center'
	},
	appBarHero: {
		backgroundColor: '#242424',
		padding:0,
		boxShadow: '0px',
		paddingLeft:'1em',
	},

	info:{
		left: '1em',
		right:'1em',
		top:'1em',
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
		flex:1,
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
	title: {
		paddingLeft:'0.5em',
		paddingTop:'1em',
		textAlign: 'start',
		color: 'white',
	},
	h2: {
		textAlign: 'center',
		color: 'white',
	},
	
};
export default useStyles;
