import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
	aboutContainerMobile: {
		backgroundColor: '#FFF0DB',
		paddingTop:'10em',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		alignContent: 'space-between',
		justifyContent:'space-between',
		height: '800px',
	},
	aboutContainerDesktop: {
		backgroundColor: '#FFF0DB',
		paddingTop:'10em',
		paddingBottom:'13em',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignContent: 'center',
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
		height: '45%',
		width: '35%',
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
		alignSelf:'center',
		width: '40%',
		height: '30%',
		maxWidth: '900px',
		textAlign: 'left',
		display: 'flex',
		flexDirection: 'column',
		alignItems:'center',
		justifyContent: 'space-around',
	},
	padding: {
		height: '10%',
		width: '100%',
	},

}));

export default useStyles;
