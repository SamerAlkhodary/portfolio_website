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
		justifyContent:'start'

	},
	pagesRow:{
		flex:1,
		flexDirection:'row',
		display:'flex',
		justifyContent:'space-around'

	},
	appBar: {
		backgroundColor: '#E4D5B7',
		opacity: 1,
	},
	row: {
		justifyContent: 'space-between',
		display:'flex',
		flexDirection:'row',
		flex:1,
	},
	logo: {
		color: 'black', 
	},
	menuIcon: {
		color: 'black',
		
	},
	menuButton: {
		color: 'black',
        
	},
}));

export default useStyles;
