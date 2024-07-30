import Consts from '../../consts';

const useStyles = {
	footerMobile:{
		backgroundColor: Consts.theme.secondary,
		flex:1,
		display:'flex',
		flexDirection: 'column',
		justifyContent:'start',
		alignItems:'center',
		paddingLeft: '1.5em',
		paddingRight: '1.5em',
		paddingTop:'4em',
		paddingBottom:'4em',
		gap:'1em'
	},
	contact:{
		backgroundColor: Consts.theme.secondary,
		display:'flex',
		flexDirection: 'column',
		justifyContent:'start',
		alignItems:'center',
		gap:'1em'

	},
	socialMedia:{
		backgroundColor: Consts.theme.secondary,
		display:'flex',
		flexDirection: 'column',
		justifyContent:'start',
		alignItems:'center',
		gap:'1em'

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
	}

};

export default useStyles;
