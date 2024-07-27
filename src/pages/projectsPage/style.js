import Consts from '../../consts';

const useStyles ={
	servicesPage:{
		backgroundColor:Consts.theme.secondary,
		paddingBottom:'5em',
		paddingTop: '5em',
		paddingLeft:'1em',
		paddingRight:'1em',
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
		width:'40em',
		display: 'flex',
		flexDirection:'row',
		flex:1,
		gap:'20px',
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
