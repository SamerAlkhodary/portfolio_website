import Consts from '../../consts';

const useStyles = {
	footerMobile:{
		backgroundColor: Consts.theme.secondary,
		flex:1,
		display:'flex',
		flexDirection: 'column',
		justifyContent:'start',
		alignItems:'center',
		paddingTop:'4em',
		paddingBottom:'4em',
		gap:'1em'
	},
	iconList:{
		display:'flex',
		flexDirection: 'row',
		justifyContent:'center',
	},
	contact:{
		backgroundColor: Consts.theme.secondary,
		display:'flex',
		flexDirection: 'column',
		justifyContent:'start',
		width:'200',
		alignItems:'center',
		gap:'1em'

	},
	socialMedia:{
		display:'flex',
		flexDirection: 'column',
		justifyContent:'start',
		alignItems:'center',
		gap:'1em',
		width:200,


	},
	footerDesktop:{
		backgroundColor: Consts.theme.secondary,
		flex:1,
		display:'flex',
		flexDirection: 'row',
		justifyContent:'space-around',
		alignItems:'center',
		
		paddingTop:'4em',
		paddingBottom:'4em',
		gap:'1em'
	},
	h1:{
		color:'white'
	},
	instagram:{
		color:Consts.theme.accent,
		margin:0,
		padding:0,
		alignSelf:'center',
		justifyContent:'center'
	},
	link:{
		color:Consts.theme.accent

	}

};

export default useStyles;
