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
	closeIconDiv:{
		flex:1,
		position:'fixed',
		top: '2em',
		left: '1.5em',
		right: 0,
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
	metaStrip:{
		display:'flex',
		flexWrap:'wrap',
		justifyContent:'center',
		gap:'1.5em',
		padding:'1.5em 1em',
		borderBottom:`1px solid rgba(238, 194, 131, 0.25)`,
	},
	metaItem:{
		display:'flex',
		flexDirection:'column',
		alignItems:'center',
		gap:'0.2em',
		minWidth:'5em',
	},
	metaLabel:{
		color:Consts.theme.accent,
		textTransform:'uppercase',
		letterSpacing:'0.08em',
		opacity:0.9,
	},
	metaValue:{
		color:'white',
	},
	baContainer:{
		position:'relative',
		width:'100%',
		aspectRatio:'16 / 10',
		overflow:'hidden',
		userSelect:'none',
		touchAction:'none',
		cursor:'ew-resize',
	},
	baImg:{
		position:'absolute',
		inset:0,
		width:'100%',
		height:'100%',
		objectFit:'cover',
		pointerEvents:'none',
	},
	baBefore:{
		position:'absolute',
		inset:0,
	},
	baTag:{
		position:'absolute',
		top:'0.75em',
		color:'white',
		backgroundColor:'rgba(36, 36, 36, 0.7)',
		padding:'0.15em 0.6em',
		borderRadius:'1em',
	},
	baHandle:{
		position:'absolute',
		top:0,
		bottom:0,
		width:'2px',
		backgroundColor:'white',
		transform:'translateX(-1px)',
		display:'flex',
		alignItems:'center',
		justifyContent:'center',
	},
	baHandleKnob:{
		width:'2.2em',
		height:'2.2em',
		borderRadius:'50%',
		backgroundColor:Consts.theme.accent,
		color:Consts.theme.secondary,
		display:'flex',
		alignItems:'center',
		justifyContent:'center',
		fontWeight:'bold',
		boxShadow:'0 2px 8px rgba(0,0,0,0.4)',
	},
	relatedSection:{
		padding:'2em 1em 1em',
	},
	relatedGrid:{
		display:'grid',
		gap:'1em',
		paddingTop:'1em',
	},
	ctaSection:{
		display:'flex',
		justifyContent:'center',
		padding:'2em 1em 3em',
	},
	ctaButton:{
		backgroundColor:Consts.theme.accent,
		padding:'0.8em 2em',
		borderRadius:'2em',
		textTransform:'none',
	},
};
export default useStyles;
