import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	itemRow:{
		display:'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		flex:1,
	},
	logoItem:{
		flex:1,
		display:'flex',
		justifyContent:'start',
		padding:0,

	},
	pagesRow:{
		flex:1,
		flexDirection:'row',
		display:'flex',
		justifyContent:'space-around'

	},
	appBarHero: {
		backgroundColor: '#242424',
		padding:0,
		boxShadow: '0px',
		paddingLeft:'10%',
	},
	appBarRest: {
		paddingLeft:'10%',

		backgroundColor: 'white',
		boxShadow: '0px',
		padding:0,
	},
	row: {
		justifyContent: 'space-between',
		display:'flex',
		flexDirection:'row',
		flex:1,
	},
	logo: {
		color: 'white', 
	},
	menuIcon: {
		color: 'black',
		
	},
	menuButton: {
		color: '#EEC283'        
	},
	
}));

export default useStyles;
