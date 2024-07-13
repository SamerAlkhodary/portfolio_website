import { makeStyles } from '@material-ui/core/styles';
import Consts from '../../../../consts';

const useStyles = makeStyles(() => ({
	
	card:{
		alignSelf:'center',
		gap:'3em',
		width:'30%',
		backgroundImage:'linear-gradient(to bottom right, #EEC283, rgba(228,191,183,0.7))',
		backdropFilter: 'blur(10px)',
		boxShadow: '10px 10px 10px rgba(30,30,30,0.4)',
		borderRadius:'0.5em',
		border: 'solid 2px transparent',	
	},
	mobileCard:{
		alignSelf:'center',
		width:'90%',

		gap:'3em',
		backgroundImage:'linear-gradient(to bottom right, #EEC283, rgba(228,191,183,0.7))',
		backdropFilter: 'blur(10px)',
		boxShadow: '10px 10px 10px rgba(30,30,30,0.4)',
		borderRadius:'0.5em',
		border: 'solid 2px transparent',	
	},
	txt:{
		textAlign:'center',
		width: '100%',
		color: Consts.theme.secondary
	},


}));

export default useStyles;