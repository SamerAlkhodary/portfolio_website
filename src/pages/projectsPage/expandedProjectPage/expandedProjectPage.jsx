import React from 'react';
import { Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

import classes from './style.js';
import translate from '../../res/strings/strings.js';

//import { useMediaQuery } from 'react-responsive';
const ExpandedProjectPage = (props,ref)=> {
	const images = require.context('../../images', true);
	const {title,description,date,area} = props;
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div ref={ref} style={classes.page}>

			<Typography  style={classes.title} variant='h4' fontFamily={'Merriweather'} fontWeight='bold'>
				{title}
			</Typography>
			<Typography  style={classes.title} variant='h5' paragraph fontFamily={'Merriweather'} fontWeight='bold'>
				{translate('mido_description')}
			</Typography>
			<div style={classes.container}>
				
			</div>
		</div>
     

	);
};
export default React.forwardRef(ExpandedProjectPage);
