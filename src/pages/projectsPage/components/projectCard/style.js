import Consts from '../../../../consts';

const useStyles = {
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
		borderRadius:'1em',
		boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3)',		
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
