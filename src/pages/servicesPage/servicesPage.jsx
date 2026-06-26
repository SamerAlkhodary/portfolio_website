import React from 'react';
import { Typography } from '@mui/material';
import {  ServiceCard, ServiceProcess } from './components/index.js';
import classes from './style.js';
import { useMediaQuery } from 'react-responsive';
import useTranslate from '../../res/strings/strings.js';

const ServicesPage = (props,ref)=> {
	const translate = useTranslate();
	const highlightsFor = (prefix)=> [1,2,3].map(n => translate(`${prefix}Highlight${n}`));

	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div ref={ref} style={classes.servicesPage}>
			<div style={classes.container}>

				<Typography  component='h2' style={classes.title} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
					{translate('services')}
				</Typography>
				<ServiceProcess/>
				<div style={isDesktopOrLaptop?classes.serviceList:classes.serviceListMobile}>
					<ServiceCard width={3730} height={2487} srcSet={'/assets/images/construction_mobile.webp 1500w, /assets/images/construction_desktop.webp 1700w '} img={'/assets/images/construction_desktop.webp'} title={translate('construction')} description= {translate('constructionDescription')} highlights={highlightsFor('construction')}/>
					<ServiceCard width={4288} height={2848} srcSet={'/assets/images/renovation.webp 1500w, /assets/images/renovation.webp 1700w '} img={'/assets/images/renovation.webp'}reverse title={translate('renovation')} description= {translate('renovationDescription')} highlights={highlightsFor('renovation')}/>
					<ServiceCard width={2380} height={1785} srcSet={'/assets/images/extension_mobile.webp 1500w, /assets/images/extension_desktop.webp 1700w '} img={'/assets/images/extension_desktop.webp'} title={translate('houseConstruction')} description= {translate('houseConstructionDescription')} highlights={highlightsFor('house')}/>
					<ServiceCard width={3220} height={2147} srcSet={'/assets/images/consultation_mobile.webp 1500w, /assets/images/consultation_desktop.webp 1700w '} img={'/assets/images/consultation_desktop.webp'}reverse title={translate('consultation')} description= {translate('consultationDescription')} highlights={highlightsFor('consultation')}/>

				</div>
			</div>
		</div>


	);
};
export default React.forwardRef(ServicesPage);
