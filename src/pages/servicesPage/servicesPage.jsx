import React from 'react';
import { Typography } from '@mui/material';
import { ServiceCard } from './components/index.js';
import useStyles from './style.js';
import construction from '../../res/construction.webp';
import renovation from '../../res/renovation.webp';
import extension from '../../res/extension.webp';

import { useMediaQuery } from 'react-responsive';
const ServicesPage = (props,ref)=> {
	
	const classes = useStyles();
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div ref={ref} className={classes.servicesPage}>
			<div className={classes.container}>

				<Typography  className={classes.title} variant='h4' fontFamily={'Merriweather'} fontWeight='bold'>
                Services
				</Typography>
				<div className={isDesktopOrLaptop?classes.serviceList:classes.serviceListMobile}>
					<ServiceCard img={construction} title="Construction" description= "For new construction, we can act as the main contractor. We have our own groundworks division that handles all excavation and construction work. We build everything from brand new houses and other properties to docks and port facilities."/>
					<ServiceCard img={renovation} title="Renovation" description= "we renovate every room in the house. We are certified for wet rooms, enabling us to perform various types of bathroom renovations (tiling, laying tile floors) as well as kitchen renovations."/>
					<ServiceCard img={extension} title="Extension" description= "Planning an extension? We help you with all types of additions. Hire us if you need this service for a sunroom, veranda, garage, bathroom, etc. We handle almost everything and offer a complete, hassle-free solution."/>

				</div>
			</div>
		</div>
     

	);
};
export default React.forwardRef(ServicesPage);
