import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Consts from '../../../../consts.js';
import useTranslate from '../../../../res/strings/strings.js';
import useAnalytics from '../../../../utils/analytics.js';
import classes from './style.js';

// Converts a browsing visitor into a lead — sends them to the contact section
// on the home page (which is a scroll target, not its own route).
const QuoteCta = ()=> {
	const translate = useTranslate();
	const navigate = useNavigate();
	const { sendEvent } = useAnalytics();
	return (
		<div style={classes.ctaSection}>
			<Button
				style={classes.ctaButton}
				onClick={()=>{
					sendEvent({ category: 'projects', action: 'click', label: 'quote_cta' });
					navigate('/#contact');
				}}>
				<Typography fontFamily={'Merriweather'} fontWeight='bold' fontSize={'1em'} color={Consts.theme.secondary}>
					{translate('getQuoteLikeThis')}
				</Typography>
			</Button>
		</div>
	);
};
export default QuoteCta;
