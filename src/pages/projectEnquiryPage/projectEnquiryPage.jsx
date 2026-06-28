import React, { useState } from 'react';
import { Button, MenuItem, TextField, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import useTranslate from '../../res/strings/strings.js';
import useAnalytics from '../../utils/analytics.js';
import { ContactActions } from '../../components/index.js';
import classes, { fieldSx } from './style.js';

// Project enquiry form (issue #85): a conversation starter, not a price
// calculator. It opens with "what do you have in mind" and gathers light context
// (type, area, timeline) so the first call is informed — pricing only comes after
// a site visit. No budget field, so no one expects an instant price.
//
// Submits to Netlify Forms: the visible form below POSTs (form-encoded) to "/",
// where Netlify records it against the hidden static form declared in index.html.
// Email notifications to info@palmyraepito.com are a one-time setting in the
// Netlify dashboard (Forms → project-enquiry → Notifications).
const ProjectEnquiryPage = (props, ref)=> {
	const translate = useTranslate();
	const { sendEvent } = useAnalytics();
	const isDesktop = useMediaQuery({ query: '(min-width: 700px)' });
	const [submitted, setSubmitted] = useState(false);

	const onSubmit = (e)=> {
		e.preventDefault();
		sendEvent({ category: 'enquiry', action: 'submit', label: 'project_enquiry' });
		const body = new URLSearchParams(new FormData(e.currentTarget)).toString();
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body,
		})
			.then(()=> setSubmitted(true))
			.catch(()=> setSubmitted(true)); // TODO(#85): show an error + call/email fallback
	};

	const types = [
		['construction', translate('enquiryTypeConstruction')],
		['renovation', translate('enquiryTypeRenovation')],
		['house', translate('enquiryTypeHouse')],
		['commercial', translate('enquiryTypeCommercial')],
		['other', translate('enquiryTypeOther')],
	];
	const timelines = [
		['asap', translate('enquiryTimelineAsap')],
		['1-3m', translate('enquiryTimeline13')],
		['3-6m', translate('enquiryTimeline36')],
		['flexible', translate('enquiryTimelineFlexible')],
	];

	return (
		<section ref={ref} style={classes.section} aria-label={translate('enquiryTitle')}>
			<div style={classes.inner}>
				{submitted ? (
					<div style={classes.thanks}>
						<Typography variant='h5' component='p' fontFamily={'Merriweather'} fontWeight='bold' style={classes.thanksTitle}>
							{translate('enquiryThanksTitle')}
						</Typography>
						<Typography variant='body1' fontFamily={'Merriweather'} style={classes.thanksBody}>
							{translate('enquiryThanksBody')}
						</Typography>
					</div>
				) : (
					<>
						<Typography component='h2' variant='h5' fontFamily={'Merriweather'} fontWeight='bold' style={classes.title}>
							{translate('enquiryTitle')}
						</Typography>
						<Typography variant='body1' fontFamily={'Merriweather'} style={classes.intro}>
							{translate('enquiryIntro')}
						</Typography>

						<form
							name='project-enquiry'
							method='POST'
							data-netlify='true'
							data-netlify-honeypot='bot-field'
							onSubmit={onSubmit}
							style={isDesktop ? classes.gridDesktop : classes.gridMobile}>
							<input type='hidden' name='form-name' value='project-enquiry'/>
							{/* honeypot: hidden from people, tempting to bots */}
							<p hidden>
								<label>Don&apos;t fill this out: <input name='bot-field'/></label>
							</p>

							{/* Lead with the open question so it reads as a conversation, not a calculator. */}
							<TextField
								name='scope' label={translate('enquiryScope')} placeholder={translate('enquiryScopePlaceholder')}
								multiline minRows={3} sx={{ ...fieldSx, ...classes.full }} fullWidth/>

							<TextField select name='type' label={translate('enquiryType')} defaultValue='' sx={fieldSx} fullWidth>
								{types.map(([v, l])=> <MenuItem key={v} value={v}>{l}</MenuItem>)}
							</TextField>
							<TextField name='area' type='number' label={translate('enquiryArea')} sx={fieldSx} fullWidth inputProps={{ min: 0 }}/>

							<TextField name='name' label={translate('yourName')} required sx={fieldSx} fullWidth/>
							<TextField name='email' type='email' label={translate('yourEmail')} required sx={fieldSx} fullWidth/>

							<TextField select name='timeline' label={translate('enquiryTimeline')} defaultValue='' sx={fieldSx} fullWidth>
								{timelines.map(([v, l])=> <MenuItem key={v} value={v}>{l}</MenuItem>)}
							</TextField>
							<TextField name='phone' label={translate('enquiryPhone')} sx={fieldSx} fullWidth/>

							<div style={classes.submitRow}>
								<Button type='submit' style={classes.submit} variant='contained' disableElevation>
									{translate('enquirySubmit')}
								</Button>
							</div>
						</form>

						{/* Secondary path for people who'd rather not fill a form. */}
						<div style={classes.orContact}>
							<Typography variant='body2' fontFamily={'Merriweather'} style={classes.orLabel}>
								{translate('enquiryOrContact')}
							</Typography>
							<ContactActions/>
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default React.forwardRef(ProjectEnquiryPage);
