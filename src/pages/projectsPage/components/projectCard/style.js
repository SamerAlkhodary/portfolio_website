import Consts from '../../../../consts';

const useStyles = {
	card:{
		position:'relative',
		width:'100%',
		aspectRatio:'4 / 3',
		borderRadius:'1em',
		overflow:'hidden',
		backgroundColor:Consts.theme.secondary,
		boxShadow:'0 4px 12px rgba(0, 0, 0, 0.35)',
		transition:'transform 0.3s ease, box-shadow 0.3s ease',
	},
	cardActive:{
		transform:'translateY(-4px)',
		boxShadow:'0 10px 24px rgba(0, 0, 0, 0.45)',
	},
	img:{
		width:'100%',
		height:'100%',
		objectFit:'cover',
		display:'block',
		filter:'brightness(0.7)',
		transition:'transform 0.3s ease',
	},
	imgActive:{
		transform:'scale(1.05)',
	},
	overlay:{
		position:'absolute',
		left:0,
		right:0,
		bottom:0,
		padding:'1em',
		display:'flex',
		flexDirection:'column',
		gap:'0.2em',
		background:'linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',
	},
	title:{
		color:Consts.theme.primary,
		margin:0,
	},
	meta:{
		color:Consts.theme.accent,
	},
	teaser:{
		color:Consts.theme.primary,
		opacity:0.85,
		display:'-webkit-box',
		WebkitLineClamp:1,
		WebkitBoxOrient:'vertical',
		overflow:'hidden',
	},
};

export default useStyles;
