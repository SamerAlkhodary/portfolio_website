import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Consts from '../../consts.js';
import useTranslate from '../../res/strings/strings.js';
import classes, { accordionSx } from './style.js';

// Common questions, drafted by the contractor-expert skill. Company-specific
// facts are marked [owner to confirm: …] in the strings until the owner supplies
// the real values. Each answer is short and honest.
const QUESTIONS = [1, 2, 3, 4, 5, 6];

const FaqPage = (props, ref)=> {
	const translate = useTranslate();
	return (
		<section ref={ref} style={classes.section} aria-label={translate('faqTitle')}>
			<div style={classes.inner}>
				<Typography component='h2' variant='h5' fontFamily={'Merriweather'} fontWeight='bold' style={classes.title}>
					{translate('faqTitle')}
				</Typography>
				<div style={classes.list}>
					{QUESTIONS.map(n=> (
						<Accordion key={n} sx={accordionSx} disableGutters>
							<AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: Consts.theme.accent }}/>}>
								<Typography fontFamily={'Merriweather'} fontWeight='bold' style={classes.q}>
									{translate(`faqQ${n}`)}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography fontFamily={'Merriweather'} style={classes.a}>
									{translate(`faqA${n}`)}
								</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</div>
			</div>
		</section>
	);
};

export default React.forwardRef(FaqPage);
