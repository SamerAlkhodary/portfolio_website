import React from 'react';
import { Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import useTranslate from '../../res/strings/strings.js';
import classes from './style.js';

// Two link cards on the home page pointing to /how-we-work and /faq, so a visitor
// scrolling the home page (on mobile the nav is hidden in the burger) still
// discovers those pages. Keeps the home lean: a teaser, not the full content.
const ExploreTeaser = ()=> {
	const translate = useTranslate();
	const navigate = useNavigate();
	const isDesktop = useMediaQuery({ query: '(min-width: 700px)' });

	const cards = [
		{ title: 'howWeWorkTitle', desc: 'teaserPricingDesc', to: '/how-we-work' },
		{ title: 'faqTitle', desc: 'teaserFaqDesc', to: '/faq' },
	];

	return (
		<section style={classes.section} aria-label={translate('teaserTitle')}>
			<div style={classes.inner}>
				<Typography component='h2' variant='h5' fontFamily={'Merriweather'} fontWeight='bold' style={classes.title}>
					{translate('teaserTitle')}
				</Typography>
				<div style={{ ...classes.cards, gridTemplateColumns: `repeat(${isDesktop ? 2 : 1}, 1fr)` }}>
					{cards.map(c=> (
						<div
							key={c.to}
							style={classes.card}
							role='button'
							tabIndex={0}
							onClick={()=> navigate(c.to)}
							onKeyDown={(e)=>{ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); navigate(c.to); } }}>
							<Typography component='h3' variant='h6' fontFamily={'Merriweather'} fontWeight='bold' style={classes.cardTitle}>
								{translate(c.title)}
							</Typography>
							<Typography variant='body1' fontFamily={'Merriweather'} style={classes.cardDesc}>
								{translate(c.desc)}
							</Typography>
							<Typography variant='body2' fontFamily={'Merriweather'} style={classes.cardCta}>
								{translate('teaserCta')} →
							</Typography>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExploreTeaser;
