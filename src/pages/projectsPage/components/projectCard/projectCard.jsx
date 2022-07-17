import { StylesContext } from '@material-ui/styles';
import { Typography } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import useStyles from './style.js';
const ProjectCard = ({thumbnail,description})=> {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	const classes = useStyles();
	
	return (
		<div  className={isDesktopOrLaptop? classes.cardDesktop: StylesContext.cardMobile  }>
			<img className={isDesktopOrLaptop?classes.thumbnailDesktop: classes.thumbnailMobile} src={thumbnail} alt='project'/>
			<Typography className={isDesktopOrLaptop?classes.txtDesktop: classes.txtMobile} variant='h6' fontFamily={'Merriweather'}>
				{description}
			</Typography>
		</div>

	);
};
export default ProjectCard;
