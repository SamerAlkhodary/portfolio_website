import React from 'react';
import { Typography } from '@mui/material';
import { ServiceProcess } from './components/index.js';
import ServiceItem from './components/serviceItem/serviceItem.jsx';
import classes from './style.js';
import useTranslate from '../../res/strings/strings.js';

// Services as an editorial list (hairline-divided rows). Rows that map to a real
// project carry a small clickable thumbnail linking to it (proof, right-sized);
// the rest stay text-only. The full gallery stays in Projects.
// NOTE: image -> service mapping is illustrative — swap to the best real shot per
// service once more projects are shot. Both current projects are commercial
// renovations, so they're attached to the two closest service rows.
const SERVICES = [
	{ title: 'construction', desc: 'constructionDescription', highlights: 'construction', image: '/assets/images/projects/1/hero_mobile.webp', to: '/projects/1/' },
	{ title: 'renovation', desc: 'renovationDescription', highlights: 'renovation', image: '/assets/images/projects/2/hero_mobile.webp', to: '/projects/2/' },
	{ title: 'houseConstruction', desc: 'houseConstructionDescription', highlights: 'house' },
	{ title: 'consultation', desc: 'consultationDescription', highlights: 'consultation' },
];

const ServicesPage = (props, ref)=> {
	const translate = useTranslate();
	const highlightsFor = (prefix)=> [1, 2, 3].map(n => translate(`${prefix}Highlight${n}`));

	return (
		<div ref={ref} style={classes.servicesPage}>
			<div style={classes.inner}>
				<Typography component='h2' style={classes.title} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
					{translate('services')}
				</Typography>
				<div>
					{SERVICES.map(s=> (
						<ServiceItem
							key={s.title}
							title={translate(s.title)}
							description={translate(s.desc)}
							highlights={highlightsFor(s.highlights)}
							image={s.image}
							to={s.to}
						/>
					))}
				</div>
			</div>
			<ServiceProcess/>
		</div>
	);
};

export default React.forwardRef(ServicesPage);
