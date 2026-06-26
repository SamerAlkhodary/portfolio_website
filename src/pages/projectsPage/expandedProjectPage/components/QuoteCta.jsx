import React from 'react';
import { Typography } from '@mui/material';
import { ContactActions } from '../../../../components/index.js';
import useTranslate from '../../../../res/strings/strings.js';
import classes from './style.js';

// Closing call-to-action on a project page. Reuses the shared contact buttons,
// pre-addressing the email with this project's name so enquiries have context.
const QuoteCta = ({ project })=> {
	const translate = useTranslate();
	const projectName = translate(project.name, 'projectsInfo');
	return (
		<section style={classes.ctaSection}>
			<Typography component='h2' style={classes.ctaTitle} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
				{translate('quoteCtaTitle')}
			</Typography>
			<Typography style={classes.ctaText} variant='body1' fontFamily={'Merriweather'}>
				{translate('quoteCtaText')}
			</Typography>
			<ContactActions
				subject={`${translate('quoteEmailSubject')} — ${projectName}`}
				analytics={{ category: 'projects', emailLabel: 'quote_email', callLabel: 'quote_call' }}
			/>
		</section>
	);
};
export default QuoteCta;
