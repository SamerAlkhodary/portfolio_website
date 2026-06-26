import {  Typography } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';


import classes from './style.js';
const ProjectCard = ({img,srcSet,title,onclick})=> {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});	
	return (
		<div style={isDesktopOrLaptop? classes.cardDesktop:classes.cardMobile} onClick={onclick}>
			<img srcSet={srcSet} style={classes.img} src={img} loading='lazy' alt={title}/>
			<Typography component='h3' style={classes.txt} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
				{title}
			</Typography>
			
		</div>

	);
};
export default ProjectCard;
