import { CardContent, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import { useMediaQuery } from 'react-responsive';

import useStyles from './style.js';
import Consts from '../../../../consts.js';
const ServiceInfoCard = ({title,description})=> {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	const classes = useStyles();

	return (
		<Card className={isDesktopOrLaptop? classes.cardDesktop:classes.cardMobile } variant="outlined" sx={{ borderRadius: 2,backgroundColor: Consts.theme.primary,boxShadow:4}}>
			<CardContent>
				<Typography className={classes.txt} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
					{title}
				</Typography>

				<Typography className={classes.txt} variant='body2' fontFamily={'Merriweather'}>
					{description}
				</Typography>

			</CardContent>

		</Card>

	);
};
export default ServiceInfoCard;