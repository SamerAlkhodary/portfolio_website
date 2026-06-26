import { Button, Typography } from '@mui/material';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import classes from './style.js';
import { useMediaQuery } from 'react-responsive';
import Consts from '../../consts.js';
import info from '../../res/strings/info.js';
import useTranslate from '../../res/strings/strings.js';
import useAnalytics from '../../utils/analytics.js';

const ContactPage = (props,ref)=> {
	const {sendEvent} = useAnalytics();
	const translate = useTranslate();

	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div ref={ref} id='contact' style={classes.contactPage}>
			<Typography  component='h2' fontWeight='bold' style={classes.title}variant='h5' fontFamily={'Merriweather'}>
				{translate('contactPageTitle')}
			</Typography>
			<Typography style={classes.prompt} variant='body1' fontFamily={'Merriweather'}>
				{translate('contactPrompt')}
			</Typography>
			<div style={isDesktopOrLaptop?classes.ctaRow:classes.ctaColumn}>
				<Button
					aria-label={`${translate('emailUs')}: ${info.email}`}
					startIcon={<EmailIcon/>}
					style={classes.primaryCta}
					onClick={()=>{
						window.open(`mailto:${info.email}`);
						sendEvent({category:'contacts',action:'click',label:'email'});
					}}>
					<Typography fontFamily={'Merriweather'} fontWeight={'bold'} fontSize={'1em'} color={Consts.theme.secondary}>
						{translate('emailUs')}
					</Typography>
				</Button>
				<Button
					aria-label={`${translate('callUs')}: ${info.number}`}
					startIcon={<PhoneIcon/>}
					style={classes.secondaryCta}
					onClick={()=>{
						window.open(`tel:${info.number}`);
						sendEvent({category:'contacts',action:'click',label:'phone'});
					}}>
					<Typography fontFamily={'Merriweather'} fontWeight={'bold'} fontSize={'1em'} color={Consts.theme.primary}>
						{translate('callUs')}
					</Typography>
				</Button>
			</div>
		</div>
	);
};
export default React.forwardRef(ContactPage);
