import React from 'react';
import { Button, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { useMediaQuery } from 'react-responsive';
import Consts from '../../consts.js';
import info from '../../res/strings/info.js';
import useTranslate from '../../res/strings/strings.js';
import useAnalytics from '../../utils/analytics.js';
import classes from './style.js';

// Email + call buttons shared by the contact section and the project-page CTA.
// `subject` pre-fills the email (e.g. with a project name); `analytics` tags the
// events so each placement reports under its own label.
const ContactActions = ({ subject, analytics = {} })=> {
	const translate = useTranslate();
	const { sendEvent } = useAnalytics();
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 900px)' });
	const { category = 'contacts', emailLabel = 'email', callLabel = 'phone' } = analytics;

	const mailto = subject
		? `mailto:${info.email}?subject=${encodeURIComponent(subject)}`
		: `mailto:${info.email}`;

	const Action = ({ icon, label, contact, href, style, textColor, eventLabel })=> (
		<Button
			startIcon={icon}
			style={style}
			aria-label={`${label}: ${contact}`}
			onClick={()=>{
				window.open(href);
				sendEvent({ category, action: 'click', label: eventLabel });
			}}>
			<Typography fontFamily={'Merriweather'} fontWeight='bold' fontSize={'1em'} color={textColor}>
				{label}
			</Typography>
		</Button>
	);

	return (
		<div style={isDesktopOrLaptop ? classes.row : classes.column}>
			<Action
				icon={<EmailIcon/>}
				label={translate('emailUs')}
				contact={info.email}
				href={mailto}
				style={classes.primary}
				textColor={Consts.theme.secondary}
				eventLabel={emailLabel}
			/>
			<Action
				icon={<PhoneIcon/>}
				label={translate('callUs')}
				contact={info.number}
				href={`tel:${info.number}`}
				style={classes.secondary}
				textColor={Consts.theme.primary}
				eventLabel={callLabel}
			/>
		</div>
	);
};
export default ContactActions;
