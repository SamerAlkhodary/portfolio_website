import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
	aboutPageMobile: {
		paddingTop:'20%',

		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		alignContent: 'space-between',
		justifyContent:'space-around',
		backgroundColor: '#FFF0DB',
		height: '1000px',
	},
	aboutPageDesktop: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		alignContent: 'center',
		backgroundColor: '#FFF0DB',
		height: '1000px',
	},
	textTitle: {
		fontFamily: 'Merriweather',
		fontWeight: 'bold',
	},
	text: {
		fontFamily: 'Merriweather',
		fontSize:'2.5vw',

	},
	profileImg: {
		height: '100%',
		width: '100%',
		borderRadius: '30%',
		objectFit: 'cover',
	},
	profileBg: {
		height: '50%',
		width: '40%',
		padding:10,
		maxWidth: '350px',
		maxHeight: '350px',
		minWidth: '320px',
		minHeight: '300px',
		borderRadius: '30%',
		backgroundColor: '#E4D5BD',
	},

	textsMobile: {
		width: '80%',
		height: '50%',
		maxWidth: '900px',
		textAlign: 'left',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-aound',
	},
	textsDesktop: {
		width: '40%',
		height: '30%',
		maxWidth: '900px',
		textAlign: 'left',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-aound',
	},
	padding: {
		height: '10%',
		width: '100%',
	},
}));

export default useStyles;
