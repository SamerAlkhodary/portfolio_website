import React from 'react';
import classes from './style';
import Logo from '../../res/images/vertical_logo.svg';
import { Typography } from '@mui/material';
import info from '../../res/strings/info';

// eslint-disable-next-line react/prop-types
function Footer() {
	return (
		<div style={classes.footer}>
			<img style={{ height: 70, width: 200 }} src={Logo}alt={'logo'}/>	
			<Typography variant={'h7'} fontFamily={'Merriweather'}  style={classes.h1}>
				{
					info.email
				}
			</Typography>
			<Typography variant={'h7'} fontFamily={'Merriweather'}  style={classes.h1}>
				{
					info.number
				}
			</Typography>
		</div>
	);
}
export default Footer;
