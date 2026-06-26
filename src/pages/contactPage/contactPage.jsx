import React from 'react';
import { Typography } from '@mui/material';
import classes from './style.js';
import { ContactActions } from '../../components/index.js';
import useTranslate from '../../res/strings/strings.js';

const ContactPage = (props,ref)=> {
	const translate = useTranslate();

	return (
		<div ref={ref} style={classes.contactPage}>
			<Typography  component='h2' fontWeight='bold' style={classes.title}variant='h5' fontFamily={'Merriweather'}>
				{translate('contactPageTitle')}
			</Typography>
			<Typography style={classes.prompt} variant='body1' fontFamily={'Merriweather'}>
				{translate('contactPrompt')}
			</Typography>
			<ContactActions/>
		</div>
	);
};
export default React.forwardRef(ContactPage);
