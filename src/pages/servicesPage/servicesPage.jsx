import React from 'react';
import { Typography } from '@mui/material';
import { ServiceProcess } from './components/index.js';
import ServiceItem from './components/serviceItem/serviceItem.jsx';
import classes from './style.js';
import useTranslate from '../../res/strings/strings.js';

// Services as an editorial list (hairline-divided rows), not a stock-photo
// zig-zag or a templated icon-card grid. Real visual proof lives in Projects.
const SERVICES = [
	{ title: 'construction', desc: 'constructionDescription', highlights: 'construction' },
	{ title: 'renovation', desc: 'renovationDescription', highlights: 'renovation' },
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
						/>
					))}
				</div>
			</div>
			<ServiceProcess/>
		</div>
	);
};

export default React.forwardRef(ServicesPage);
