import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	cardDesktop:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent:'space-between',
		alignContent: 'center',
		alignItems: 'center',
		flex:1,
	},
	cardMobile:{
		display: 'flex',
		flexDirection: 'column',
		justifyContent:'space-between',
		alignItems: 'start',
		flex:1,
	},
	thumbnailDesktop:{
		width: '30%',
		height:'30%',
		objectFit: 'cover',
	},
	thumbnailMobile:{
		width: '100%',
		height:'20%',
		objectFit: 'cover',
	},
	txtDesktop:{
		textAlign:'start',
		width: '50%',
	},
	txtMobile:{
		textAlign:'start',
		width: '100%',
	}
	
}));

export default useStyles;
