import {  Typography } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import classes from './style.js';
const ServiceInfoCard = ({title,description})=> {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div style={isDesktopOrLaptop?classes.card:classes.mobileCard} variant="outlined" >
			
			<Typography style={classes.txt} variant='h6' fontFamily={'Merriweather'} fontWeight='bold'>
				{title}
			</Typography>

			<Typography style={classes.txt} variant='body2' fontFamily={'Merriweather'}>
				{description}
			</Typography>

			

		</div>

	);
};
export default ServiceInfoCard;