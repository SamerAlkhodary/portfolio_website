import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	contactPage:{
		backgroundColor:'#FFF0DB',
		height:'800px',
	},
	containerMobile: {
		height: '80%',
		width: '80%',
		padding: '10%',
		display:'flex',
		flexDirection:'column',
		justifyContent: 'space-around',
		paddingTop:'5em'

	},
	containerDesktop: {
		height: '50%',
		width: '100%',
		display:'flex',
		paddingTop:'5em',
		flexDirection:'row',
		justifyContent: 'space-around'

	},
	title:{
		textAlign:'start',
		paddingBottom:'10%'
		
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
		width:'100%',
		height:'30%',

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
		backgroundImage:'linear-gradient(to bottom right, rgba(228,191,183,0.2), rgba(228,191,183,0))',
		backdropFilter: 'blur(10px)',
		boxShadow: '10px 10px 10px rgba(30,30,30,0.5)',
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
