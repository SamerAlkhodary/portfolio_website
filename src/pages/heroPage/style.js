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

	aboutPage: {
		width: '100%',
		position: 'absolute',
		top: 900,

		backgroundColor: 'white',
		height: '1000px',
	},
}));

export default useStyles;
