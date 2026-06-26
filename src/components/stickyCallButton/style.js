import Consts from '../../consts';

const useStyles = {
	fab:{
		position:'fixed',
		right:'1.1em',
		bottom:'1.1em',
		zIndex:700,
		width:'3.4em',
		height:'3.4em',
		borderRadius:'50%',
		border:'none',
		backgroundColor:Consts.theme.accent,
		boxShadow:'0 6px 16px rgba(0, 0, 0, 0.45)',
		display:'flex',
		alignItems:'center',
		justifyContent:'center',
		cursor:'pointer',
	},
};

export default useStyles;
