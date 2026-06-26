import React from 'react';
import { Typography } from '@mui/material';
import ContactActions from '../contactActions/contactActions.jsx';
import useTranslate from '../../res/strings/strings.js';
import classes from './style.js';

// Mid-page conversion nudge — a short heading plus the shared email/call buttons.
// Sits between sections so contacting isn't only possible at the hero and footer.
const SectionCta = ()=> {
	const translate = useTranslate();
	return (
		<section style={classes.wrap}>
			<Typography component='h2' style={classes.title} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
				{translate('midCtaTitle')}
			</Typography>
			<Typography style={classes.text} variant='body1' fontFamily={'Merriweather'}>
				{translate('midCtaText')}
			</Typography>
			<ContactActions analytics={{ category: 'cta', emailLabel: 'mid_cta_email', callLabel: 'mid_cta_call' }}/>
		</section>
	);
};
export default SectionCta;
