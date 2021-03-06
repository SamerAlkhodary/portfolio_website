import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	
	container: {
		width: '100%',
		height:'100%',
		backgroundColor:'black',
	},
	hero: {
		width: '100%',
		height: '100%',
		opacity: '0.5',
		objectFit: 'cover',
	},
	h1: {
		textAlign: 'start',
		color: 'white',
	},
	h2: {
		textAlign: 'start',
		color: 'white',
	},
	button: {
		backgroundColor: '#a87267',
		width:'50%',
		height: '5%',
	},

	texts:{ height:'80%',
		minWidth:'20em',
		maxWidth:'50em', 
		width:'40%',top:'3em',
		left:'10%',
		position:'absolute',
		display:'flex',
		gap:'5em',
		flexDirection:'column',
		justifyContent:'center'}
}));

export default useStyles;
