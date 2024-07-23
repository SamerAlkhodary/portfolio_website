import Consts from '../../consts';

const useStyles = {
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
		gap:'1em',
		paddingLeft:'1em',
		paddingRight:'1em',
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

	
};

export default useStyles;
