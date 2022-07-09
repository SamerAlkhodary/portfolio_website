import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	itemRow:{
		display:'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		flex:1,
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
