import {  Typography } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import classes from './style.js';

const ProjectCard = ({img,srcSet,title,meta,onclick})=> {
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 900px)' });
	return (
		<div
			style={classes.card}
			onClick={onclick}
			onKeyDown={(e)=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); onclick(); } }}
			role='button'
			tabIndex={0}
			aria-label={title}>
			<img srcSet={srcSet} style={classes.img} src={img} loading='lazy' alt={title}/>
			<div style={isDesktopOrLaptop ? classes.overlay : classes.overlayMobile}>
				<Typography component='h3' style={classes.title} variant={isDesktopOrLaptop ? 'h5' : 'subtitle1'} fontFamily={'Merriweather'} fontWeight='bold'>
					{title}
				</Typography>
				{meta &&
					<Typography style={classes.meta} variant={isDesktopOrLaptop ? 'body2' : 'caption'} fontFamily={'Merriweather'}>
						{meta}
					</Typography>
				}
			</div>
		</div>

	);
};
export default ProjectCard;
