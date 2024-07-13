import { makeStyles } from '@material-ui/core/styles';
import Consts from '../../consts';

const useStyles = makeStyles(() => ({
	servicesPage:{
		backgroundColor:Consts.theme.secondary,
		display:'flex',
		paddingBottom:'5em',
		paddingTop: '5em',
		flexDirection:'column'
	},
	container:{

	},
	serviceList:{
		display: 'flex',
		flexDirection:'row',
		justifyContent: 'space-around',
		flex:1,
		height:'100%'
	},
	serviceListMobile:{
		display: 'flex',
		flexDirection:'column',
		justifyContent: 'space-between',
		flex:1,
		gap:'1em',
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
