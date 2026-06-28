import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAtom } from 'jotai';
import Consts from '../../consts.js';
import useTranslate from '../../res/strings/strings.js';
import { languageAtom } from '../../atoms';
import faq from '../../res/faq.js';
import classes, { accordionSx } from './style.js';

// Renders the FAQ list from src/res/faq.js (one place, both languages). Adding a
// question there shows up here automatically. Company-specific answers carry
// [owner to confirm: …] markers until the owner fills them in.
const FaqPage = (props, ref)=> {
	const translate = useTranslate();
	const [language] = useAtom(languageAtom);

	return (
		<section ref={ref} style={classes.section} aria-label={translate('faqTitle')}>
			<div style={classes.inner}>
				<Typography component='h2' variant='h5' fontFamily={'Merriweather'} fontWeight='bold' style={classes.title}>
					{translate('faqTitle')}
				</Typography>
				<div style={classes.list}>
					{faq.map((item, i)=> (
						<Accordion key={i} sx={accordionSx} disableGutters>
							<AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: Consts.theme.accent }}/>}>
								<Typography fontFamily={'Merriweather'} fontWeight='bold' style={classes.q}>
									{item.q[language]}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography fontFamily={'Merriweather'} style={classes.a}>
									{item.a[language]}
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
