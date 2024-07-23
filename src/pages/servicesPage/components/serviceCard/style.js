import Consts from '../../../../consts';

const useStyles = {
	cardDesktop:{
		backgroundColor:Consts.theme.secondary,
		position:'relative',

	},
	cardMobile:{
		backgroundColor:Consts.theme.secondary,
		position:'relative',
		height: '17em'
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
	
	
};

export default useStyles;
