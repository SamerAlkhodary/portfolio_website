import React from 'react';
import { Typography } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import HouseIcon from '@mui/icons-material/House';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { ServiceProcess } from './components/index.js';
import ServiceItem from './components/serviceItem/serviceItem.jsx';
import classes from './style.js';
import { useMediaQuery } from 'react-responsive';
import useTranslate from '../../res/strings/strings.js';

// Services as lean icon cards. The stock photos were generic filler (not the
// firm's own work); real visual proof lives in the Projects section instead.
const SERVICES = [
	{ Icon: ApartmentIcon, title: 'construction', desc: 'constructionDescription', highlights: 'construction' },
	{ Icon: HomeRepairServiceIcon, title: 'renovation', desc: 'renovationDescription', highlights: 'renovation' },
	{ Icon: HouseIcon, title: 'houseConstruction', desc: 'houseConstructionDescription', highlights: 'house' },
	{ Icon: EngineeringIcon, title: 'consultation', desc: 'consultationDescription', highlights: 'consultation' },
];

const ServicesPage = (props, ref)=> {
	const translate = useTranslate();
	const highlightsFor = (prefix)=> [1, 2, 3].map(n => translate(`${prefix}Highlight${n}`));
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 900px)' });

	return (
		<div ref={ref} style={classes.servicesPage}>
			<div style={classes.container}>
				<Typography component='h2' style={classes.title} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
					{translate('services')}
				</Typography>
				<div style={isDesktopOrLaptop ? classes.grid : classes.gridMobile}>
					{SERVICES.map(s=> (
						<ServiceItem
							key={s.title}
							Icon={s.Icon}
							title={translate(s.title)}
							description={translate(s.desc)}
							highlights={highlightsFor(s.highlights)}
						/>
					))}
				</div>
				<ServiceProcess/>
			</div>
		</div>
	);
};

export default React.forwardRef(ServicesPage);
