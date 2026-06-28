import React from 'react';
import { Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import useTranslate from '../../res/strings/strings.js';
import classes from './style.js';

// "How we price" — answers the cost anxiety honestly without naming a price:
// what shapes the figure, and what we won't do (no price list, no blind quotes).
const shapeKeys = ['pricingShape1', 'pricingShape2', 'pricingShape3', 'pricingShape4', 'pricingShape5'];
const honestKeys = ['pricingHonest1', 'pricingHonest2', 'pricingHonest3'];

const Column = ({ title, keys, translate })=> (
	<div>
		<Typography component='h3' variant='h6' fontFamily={'Merriweather'} fontWeight='bold' style={classes.colTitle}>
			{translate(title)}
		</Typography>
		<ul style={classes.list}>
			{keys.map(k=> (
				<li key={k} style={classes.item}>
					<span style={classes.marker}/>
					<Typography variant='body1' fontFamily={'Merriweather'} style={classes.itemText}>{translate(k)}</Typography>
				</li>
			))}
		</ul>
	</div>
);

const PricingPage = (props, ref)=> {
	const translate = useTranslate();
	const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });
	return (
		<section ref={ref} style={classes.section} aria-label={translate('pricingTitle')}>
			<div style={classes.inner}>
				<Typography component='h2' variant='h5' fontFamily={'Merriweather'} fontWeight='bold' style={classes.title}>
					{translate('pricingTitle')}
				</Typography>
				<Typography variant='body1' fontFamily={'Merriweather'} style={classes.intro}>
					{translate('pricingIntro')}
				</Typography>
				<div style={isDesktop ? classes.cols : classes.colsMobile}>
					<Column title='pricingShapesTitle' keys={shapeKeys} translate={translate}/>
					<Column title='pricingHonestTitle' keys={honestKeys} translate={translate}/>
				</div>
			</div>
		</section>
	);
};

export default React.forwardRef(PricingPage);
