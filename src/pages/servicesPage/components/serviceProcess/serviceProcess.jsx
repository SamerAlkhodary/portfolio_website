import React from 'react';
import { Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import useTranslate from '../../../../res/strings/strings.js';
import classes from './style.js';

const STEPS = [
	{ titleKey: 'processStep1Title', descKey: 'processStep1Desc' },
	{ titleKey: 'processStep2Title', descKey: 'processStep2Desc' },
	{ titleKey: 'processStep3Title', descKey: 'processStep3Desc' },
	{ titleKey: 'processStep4Title', descKey: 'processStep4Desc' },
];

const ServiceProcess = ()=> {
	const translate = useTranslate();
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 900px)' });

	const Step = ({ index, titleKey, descKey })=> (
		<div style={isDesktopOrLaptop ? classes.stepDesktop : classes.stepMobile}>
			<Typography style={classes.number} fontFamily={'Merriweather'} fontWeight='bold'>
				{String(index + 1).padStart(2, '0')}
			</Typography>
			<div style={classes.stepText}>
				<Typography component='h3' style={classes.stepTitle} variant='h6' fontFamily={'Merriweather'} fontWeight='bold'>
					{translate(titleKey)}
				</Typography>
				<Typography style={classes.stepDesc} variant='body2' fontFamily={'Merriweather'}>
					{translate(descKey)}
				</Typography>
			</div>
		</div>
	);

	return (
		<section style={classes.wrap}>
			<Typography component='h3' style={classes.heading} variant='subtitle2' fontFamily={'Merriweather'} fontWeight='bold'>
				{translate('processTitle')}
			</Typography>
			<div style={isDesktopOrLaptop ? classes.stripDesktop : classes.stripMobile}>
				{STEPS.map((step, i) => <Step key={step.titleKey} index={i} {...step}/>)}
			</div>
		</section>
	);
};
export default ServiceProcess;
