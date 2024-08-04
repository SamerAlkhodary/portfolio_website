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
					<ServiceCard img={'/assets/images/construction2.webp'} title={translate('construction')} description= {translate('constructionDescription')}/>
					<ServiceCard img={'/assets/images/renovation.webp'}reverse title={translate('renovation')} description= {translate('renovationDescription')}/>
					<ServiceCard img={'/assets/images/extension2.webp'} title={translate('houseConstruction')} description= {translate('houseConstructionDescription')}/>
					<ServiceCard img={'/assets/images/consultation2.webp'}reverse title={translate('consultation')} description= {translate('consultationDescription')}/>

				</div>
			</div>
		</div>
     

	);
};
export default React.forwardRef(ServicesPage);
