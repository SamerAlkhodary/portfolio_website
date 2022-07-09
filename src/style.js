import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	page: {
		height: '2000px',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'black',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},

}));

export default useStyles;
