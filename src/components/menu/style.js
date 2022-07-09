import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	menu: {
		width: '200px',
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		backgroundColor: '#FFF0DB',
		position:'relative',
	},
	arrowIcon:{
		
		color:'black'
	},
	close:{   
		position:'absolute',
		top:10,
		left:'80%',
		width:'5%',
		height:'5%',

	},icon:{
		color:'black',
		paddingRight: 10
	},
	item:{
		textAlign:'center',
		padding: '10%',
		color:'black',
		fontSize:20,

	},
	iconTextRow:{
		display:'flex',flexDirection:'row',flex:1,alignItems:'center'
	}
}));

export default useStyles;
