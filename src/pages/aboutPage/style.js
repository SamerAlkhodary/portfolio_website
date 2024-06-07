import { makeStyles } from '@material-ui/core/styles';
import Consts from '../../consts';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
	aboutContainerMobile: {
		paddingBottom:'2em',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap:'3em',
		alignContent: 'space-between',
		justifyContent:'space-between',
		height:'100%'
	},
	mainContainer:{
		width:'80%',
		alignSelf:'center',
	},
	page:{
		backgroundColor: Consts.theme.secondary,
		paddingTop:'5em',
		display:'flex',
		flexDirection:'column'
	},
	title:{
		alignSelf:'center',
		paddingBottom: '2em',
		textAlign:'center',
		color:'white'
	},

	aboutContainerDesktop: {
		paddingBottom:'10em',
		display: 'flex',
		gap:'3em',
		flexDirection: 'row',
		justifyContent: 'space-between',
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
		height: '10em',
		width: '10em',
		borderRadius: '20em',
		objectFit: 'cover',
	},


	textsMobile: {
		alignSelf:'center',
		paddingBottom: '2em',
		textAlign:'center',
		color: Consts.theme.primary
	},
	textsDesktop: {
		alignSelf:'center',
		paddingBottom: '2em',
		textAlign:'center',
		color: Consts.theme.primary
	},
	padding: {
		height: '10%',
		width: '100%',
	},

}));

export default useStyles;
