import React from 'react';
import { Typography } from '@mui/material';
import {  ServiceCard } from './components/index.js';
import classes from './style.js';
import { useMediaQuery } from 'react-responsive';
import translate from '../../res/strings/strings.js';

const ServicesPage = (props,ref)=> {
	
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div ref={ref} style={classes.servicesPage}>
			<div style={classes.container}>

				<Typography  style={classes.title} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
					{translate('services')}
				</Typography>
				<div style={isDesktopOrLaptop?classes.serviceList:classes.serviceListMobile}>
					<ServiceCard  srcSet={'/assets/images/construction_mobile.webp 1500w, /assets/images/construction_desktop.webp 1700w '} img={'/assets/images/construction_desktop.webp'} title={translate('construction')} description= {translate('constructionDescription')}/>
					<ServiceCard  srcSet={'/assets/images/renovation.webp 1500w, /assets/images/renovation.webp 1700w '} img={'/assets/images/renovation.webp'}reverse title={translate('renovation')} description= {translate('renovationDescription')}/>
					<ServiceCard srcSet={'/assets/images/extension_mobile.webp 1500w, /assets/images/extension_desktop.webp 1700w '} img={'/assets/images/extension_desktop.webp'} title={translate('houseConstruction')} description= {translate('houseConstructionDescription')}/>
					<ServiceCard  srcSet={'/assets/images/consultation_mobile.webp 1500w, /assets/images/consultation_desktop.webp 1700w '} img={'/assets/images/consultation_desktop.webp'}reverse title={translate('consultation')} description= {translate('consultationDescription')}/>

				</div>
			</div>
		</div>
     

	);
};
export default React.forwardRef(ServicesPage);
