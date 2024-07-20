import {  Typography } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';


import classes from './style.js';
const ServiceCard = ({img,title})=> {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div style={isDesktopOrLaptop? classes.cardDesktop:classes.cardMobile }>
			<img style={{width:'100%',height:'100%',opacity:0.6}} src={img} alt="programming"/>
			<Typography style={classes.txt} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
				{title}
			</Typography>
			
		</div>

	);
};
export default ServiceCard;
