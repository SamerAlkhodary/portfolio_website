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
		width: '60%',
		top: '10%',
		maxWidth: '500px',
		left: '10%',
		color: 'white',
		position: 'absolute',
		fontFamily: '3em Merriweather',
		minWidth: '300px',
	},
	h2: {
		textAlign: 'start',
		width: '40%',
		maxWidth: '400px',
		top: '45%',
		left: '10%',
		color: 'white',
		position: 'absolute',
		fontFamily: '2em Merriweather',
		minWidth: '300px',
	},
	button: {
		width: '17%',
		position: 'absolute',
		height: '6%',
		maxWidth: '300px',
		top: '80%',
		left: '10%',
		minWidth: '150px',
		color: 'black',
		borderRadius: 15,
		border: 0,
		fontFamily: '1em Merriweather',
		backgroundColor: '#a87267',
		'&:hover': {
			backgroundColor: '#E4BFB7',
			boxShadow: 'none',
		},
		'&:active': {
			boxShadow: 'none',
			backgroundColor: '#E4BFB7',
		},
	},
	appBar: {
		backgroundColor: 'red',
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
