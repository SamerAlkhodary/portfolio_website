import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	menu: {
		width: '200px',
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		backgroundColor: '#242424',
		position:'relative',
	},
	arrowIcon:{
		
		color:'#EEC283'
	},
	close:{   
		position:'absolute',
		top:10,
		left:'80%',
		width:'5%',
		height:'5%',

	},icon:{
		color:'#EEC283',
		paddingRight: 10
	},
	item:{
		textAlign:'center',
		padding: '10%',
		color:'white',
		fontSize:20,

	},
	iconTextRow:{
		display:'flex',flexDirection:'row',flex:1,alignItems:'center'
	}
}));

export default useStyles;
