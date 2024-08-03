import Consts from '../../consts';

const useStyles ={
	projectsPage:{
		backgroundColor:Consts.theme.secondary,
		paddingBottom:'5em',
		paddingTop: '2em',
		paddingLeft:'1em',
		paddingRight:'1em',
		display:'flex',
		flexDirection:'column',
		gap:'5em'
	},
	container:{
		overflow: 'scroll',
		overflowY: 'hidden',
	},
	projectList:{
		display: 'flex',
		flexDirection:'row',
		justifyContent: 'space-around',
		flex:1,
		height:'100%'
	},
	projectListMobile:{
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
