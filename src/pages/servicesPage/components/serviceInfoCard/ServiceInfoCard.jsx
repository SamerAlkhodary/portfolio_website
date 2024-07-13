import { CardContent, Typography } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import useStyles from './style.js';
const ServiceInfoCard = ({title,description})=> {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	const classes = useStyles();

	return (
		<div className={isDesktopOrLaptop?classes.card:classes.mobileCard} variant="outlined" >
			<CardContent>
				<Typography className={classes.txt} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
					{title}
				</Typography>

				<Typography className={classes.txt} variant='body2' fontFamily={'Merriweather'}>
					{description}
				</Typography>

			</CardContent>

		</div>

	);
};
export default ServiceInfoCard;