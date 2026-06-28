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
		paddingTop:'4em',
		flexDirection:'column',
		gap:'5em',
		paddingLeft:'1em',
		paddingRight:'1em',
		justifyContent: 'center',
		flex:1,
	},
	serviceListMobile:{
		display: 'flex',
		gap:'5em',
		flexDirection:'column',
		justifyContent: 'space-between',
		flex:1,
		height:'100%'
	},
	title:{
		alignSelf:'center',
		paddingBottom: '3em',
		color: Consts.theme.primary,
		textAlign:'center',
	},
	inner:{
		maxWidth:980,
		margin:'0 auto',
		padding:'0 clamp(1.25rem, 6vw, 3rem)',
		width:'100%',
		boxSizing:'border-box',
	},
};

export default useStyles;
