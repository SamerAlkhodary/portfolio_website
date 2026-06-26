import {  Typography } from '@mui/material';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import classes from './style.js';

const ProjectCard = ({img,srcSet,title,meta,teaser,onclick})=> {
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 900px)' });
	const [active, setActive] = useState(false);
	return (
		<div
			style={{
				...classes.card,
				aspectRatio: isDesktopOrLaptop ? '4 / 3' : '16 / 9',
				...(active ? classes.cardActive : {}),
			}}
			onClick={onclick}
			onKeyDown={(e)=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); onclick(); } }}
			onMouseEnter={()=>setActive(true)}
			onMouseLeave={()=>setActive(false)}
			onFocus={()=>setActive(true)}
			onBlur={()=>setActive(false)}
			role='button'
			tabIndex={0}
			aria-label={title}>
			<img srcSet={srcSet} style={{...classes.img, ...(active ? classes.imgActive : {})}} src={img} loading='lazy' alt={title}/>
			<div style={classes.overlay}>
				<Typography component='h3' style={classes.title} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
					{title}
				</Typography>
				{meta &&
					<Typography style={classes.meta} variant='body2' fontFamily={'Merriweather'}>
						{meta}
					</Typography>
				}
				{teaser &&
					<Typography style={classes.teaser} variant='body2' fontFamily={'Merriweather'}>
						{teaser}
					</Typography>
				}
			</div>
		</div>

	);
};
export default ProjectCard;
