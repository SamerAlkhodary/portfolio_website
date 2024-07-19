import { makeStyles } from '@material-ui/core/styles';
import Consts from '../../consts';

const useStyles = makeStyles(() => ({
	servicesPage:{
		backgroundColor:Consts.theme.secondary,
		paddingBottom:'5em',
		paddingTop: '5em',
		display:'flex',
		flexDirection:'column'
	},
	container:{
		overflowX: 'auto',

	},
	serviceList:{
		display: 'flex',
		flexDirection:'row',
		justifyContent: 'space-around',
		flex:1,
		height:'100%'
	},
	serviceListMobile:{
		width:'60em',
		display: 'flex',
		gap:'20px',
		height:'100%'
	},
	title:{
		alignSelf:'center',
		paddingBottom: '1em',
		color: Consts.theme.primary,
		textAlign:'center',
	}

	
}));

export default useStyles;
