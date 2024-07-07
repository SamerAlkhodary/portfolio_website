import { makeStyles } from '@material-ui/core/styles';
import Consts from '../../../../consts';

const useStyles = makeStyles(() => ({
	cardDesktop:{
		backgroundColor:Consts.theme.primary,
		margin: '1em',
		border: '1px solid green',
		borderRadius: 10,

		width: '20%',
	},
	cardMobile:{
		backgroundColor:Consts.theme.primary,
		margin: '1em',
		border: '1px solid green',
		borderRadius: 10
	},
	txt:{
		textAlign:'center',
		width: '100%',
		color: Consts.theme.secondary
	},


}));

export default useStyles;