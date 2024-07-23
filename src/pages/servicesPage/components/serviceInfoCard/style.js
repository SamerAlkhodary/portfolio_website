import Consts from '../../../../consts';

const useStyles = {
	
	card:{
		alignSelf:'center',
		width:'25em',
		height: '10em',
		gap:'1em',
		flexDirection:'column',
		display:'flex',
		justifyContent: 'center',
		backgroundImage:'linear-gradient(to bottom right, #EEC283, rgba(228,191,183,0.7))',
		backdropFilter: 'blur(10px)',
		boxShadow: '10px 10px 10px rgba(30,30,30,0.4)',
		borderRadius:'0.5em',
		border: 'solid 2px transparent',	
	},
	mobileCard:{
		alignSelf:'center',
		width:'90%',
		height:'8em',
		padding:'0.5em',
		gap:'0.5em',
		flexDirection:'column',
		display:'flex',
		justifyContent: 'center',
		backgroundImage:'linear-gradient(to bottom right, #EEC283, rgba(228,191,183,0.7))',
		backdropFilter: 'blur(10px)',
		boxShadow: '10px 10px 10px rgba(30,30,30,0.4)',
		borderRadius:'0.5em',
		border: 'solid 2px transparent',	
	},
	txt:{
		textAlign:'center',
		width: '100%',
		color: Consts.theme.secondary
	},


};

export default useStyles;