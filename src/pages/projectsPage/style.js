import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	projectsPage:{
		backgroundColor:'#FFF0DB',
		paddingTop: '7em',
		paddingBottom:'6em',
		display:'flex',
		flexDirection:'column'
	},
	container:{
		width:'80%',
		alignSelf: 'center',

	},
	projectList:{
		display: 'flex',
		flexDirection:'column',
		justifyContent: 'space-evenly',
		height:'100%'
	},
	title:{
		alignSelf:'start',
		paddingBottom: '1em',
		textAlign:'start',
	}

	
}));

export default useStyles;
