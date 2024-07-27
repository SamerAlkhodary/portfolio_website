import Consts from '../../../../consts';

const useStyles = {
	cardDesktop:{
		backgroundColor:Consts.theme.secondary,
		position:'relative',
		width: '30%',
		aspectRatio: 1,
	},
	cardMobile:{
		backgroundColor:Consts.theme.secondary,
		position:'relative',
		width: '20em',
		display:'flex',
		borderRadius:'1em',
		boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3)',		
	},
	img:{
		width:'100%',
		height:'100%',
		opacity:0.7,
		borderRadius:'1em',
		objectFit: 'cover',
		backgroundColor:Consts.theme.secondary,
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
	
	
};

export default useStyles;
