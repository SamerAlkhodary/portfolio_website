import { makeStyles } from '@material-ui/core/styles';
import Consts from '../../consts';

const useStyles = makeStyles(() => ({
	contactPage:{
		paddingTop:'5em',
		backgroundColor:'white',
	},
	containerMobile: {
		height: '800px',
		width: '100%',
		alignItems:'center',
		display:'flex',
		flexDirection:'column',
		justifyContent: 'space-around',
	},
	containerDesktop: {
		height: '500px',
		width: '100%',
		display:'flex',
		flexDirection:'row',
		justifyContent: 'space-around',
		alignItems:'start',
	},
	title:{
		textAlign:'start',
		color: Consts.theme.secondary
		
	},
	formDesktop:{
		display:'flex',
		flexDirection:'column',
		width:'35%',
		height:'30%',
	},
	formMobile:{
		display:'flex',
		flexDirection:'column',
		justifyContent:'space-around',
		width:'80%',
		height:'50%',

	},
	
	textInput:{
		height:'300px'
    
	},
	contactIcon:{
		objectFit:'fit',
		width:'1.5em',
		height: '1.2em',

	},
	businessCard:{
		width: '20em',
		padding: '1em',
		height:'10em',
		alignSelf:'center',
		backgroundImage:'linear-gradient(to bottom right, #EEC283, rgba(228,191,183,0.7))',
		backdropFilter: 'blur(10px)',
		boxShadow: '10px 10px 10px rgba(30,30,30,0.4)',
		borderRadius:'0.5em',
		border: 'solid 2px transparent',	
	},
	logo:{
		objectFit:'fit',
		width:'30%',
		height: '30%',
	},
	row:{
		display:'flex',
		flexDirection:'row',
		gap:'1em',
		alignItems:'center'

	},
	column:{
		alignItems:'start',
		display:'flex',
		flexDirection: 'column',
	}

	
}));

export default useStyles;
