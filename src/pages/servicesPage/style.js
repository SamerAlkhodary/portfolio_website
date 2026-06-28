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
	grid:{
		display:'grid',
		gridTemplateColumns:'1fr 1fr',
		gap:'clamp(1.25rem, 3vw, 2rem)',
		maxWidth:1080,
		margin:'0 auto',
		padding:'0 1.25rem',
		width:'100%',
		boxSizing:'border-box',
	},
	gridMobile:{
		display:'grid',
		gridTemplateColumns:'1fr',
		gap:'1.25rem',
		padding:'0 1.25rem',
		boxSizing:'border-box',
	},
};

export default useStyles;
