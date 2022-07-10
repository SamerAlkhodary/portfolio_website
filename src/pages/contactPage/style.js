import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	
	containerMobile: {
		padding:'10%',
		height:'1000px',
		backgroundColor:'#FFF0DB',
	},
	containerDesktop: {
		padding:'10%',
		height:'1000px',
		backgroundColor:'#FFF0DB',
		
	},
	title:{
		paddingBottom:'50px',
		textAlign:'start',

	},
	formDesktop:{
		display:'flex',
		flexDirection:'column',
		width:'45%',
		height:'30%',
		justifyContent:'space-between'
	},
	formMobile:{
		display:'flex',
		flexDirection:'column',
		justifyContent:'space-between',
		width:'90%',
		height:'30%',
	},
	floatingLabelFocusStyle:{
		color:'#E4BFB7 !important'

	},
	textInput:{
		height:'300px'
    
	}
}));

export default useStyles;
