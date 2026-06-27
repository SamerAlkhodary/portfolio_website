import React from 'react';
import Typography from '@mui/material/Typography';
import { useAtom } from 'jotai';
import { useMediaQuery } from 'react-responsive';
import classes from './style.js';
import useTranslate from '../../res/strings/strings.js';
import { languageAtom } from '../../atoms';
import { computeTrustStats } from '../../res/trust.js';

// Credibility band (TRU-1): "X years · Y projects · Z m² built · N cities".
// Numbers come from res/trust.js (the firm's real totals), so the band is one
// honest source of truth. Years derives from the founding year automatically.
const StatsBandPage =()=> {
	const translate = useTranslate();
	const [language] = useAtom(languageAtom);
	const isWide = useMediaQuery({ query: '(min-width: 700px)' });
	const stats = computeTrustStats();

	// Locale-aware grouping: "1 200" / "1,200" once totals pass the grouping size.
	const fmt = (n)=> n.toLocaleString(language);

	const items = [
		{ value: fmt(stats.years), label: translate('statYears') },
		{ value: `${fmt(stats.projects)}+`, label: translate('statProjects') },
		{ value: `${fmt(stats.area)}+ m²`, label: translate('statArea') },
		{ value: fmt(stats.cities), label: translate('statCities') },
	];

	return (
		<section style={classes.band} aria-label={translate('statsAria')}>
			<div style={{ ...classes.grid, gridTemplateColumns: `repeat(${isWide ? 4 : 2}, 1fr)` }}>
				{items.map((it)=> (
					<div key={it.label} style={classes.item}>
						<Typography component='p' style={classes.value} fontFamily={'Merriweather'} fontWeight='bold'>
							{it.value}
						</Typography>
						<Typography component='p' style={classes.label}>{it.label}</Typography>
					</div>
				))}
			</div>
		</section>
	);
};

export default StatsBandPage;
