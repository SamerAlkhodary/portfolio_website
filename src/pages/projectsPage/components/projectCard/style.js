import { makeStyles } from '@material-ui/core/styles';
import Consts from '../../../../consts';

const useStyles = makeStyles(() => ({
	cardDesktop:{
		backgroundColor:Consts.theme.secondary,
		position:'relative',
		width: '30%',
	},
	cardMobile:{
		backgroundColor:Consts.theme.secondary,
		position:'relative',
		width: '20em',
		display:'flex',
		borderRadius:'0.5em',
		border: 'solid 2px transparent',	
	},
	txt:{
		display:'flex',
		left:'50%',
		right:'50%',
		top:'50%',
		bottom: '50%',
		position:'absolute',
		justifyContent:'center',
		color: Consts.theme.primary
	},
	
	
}));

export default useStyles;
