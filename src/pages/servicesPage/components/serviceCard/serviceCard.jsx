import {  Typography } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';


import classes from './style.js';
const ServiceCard = ({img,srcSet,title,description,reverse,width,height})=> {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	var cardStyle={
		...isDesktopOrLaptop?classes.cardDesktop:classes.cardMobile
	};
	if(isDesktopOrLaptop && reverse){
		cardStyle= {...cardStyle,flexDirection:'row-reverse'};

	}
	//srcset="small.jpg 600w, medium.jpg 1000w, large.jpg 1500w"

	return (
		<div style={cardStyle}>
			<img
				srcSet={srcSet}
				style={isDesktopOrLaptop? classes.imgDesktop:classes.imgMobile}
				src={img}
				width={width}
				height={height}
				loading='lazy'
				alt={title}/>
			<div style={isDesktopOrLaptop?classes.textColumnDesktop:classes.textColumnMobile}>
				<Typography component='h3' style={classes.txt} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
					{title}
				</Typography>
				<Typography style={classes.txt} variant='body3' paragraph fontFamily={'Merriweather'}>
					{description}
				</Typography>
			</div>
			
			
		</div>

	);
};
export default ServiceCard;
