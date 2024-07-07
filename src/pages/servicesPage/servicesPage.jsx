import React from 'react';
import { Typography } from '@mui/material';
import {  ServiceInfoCard } from './components/index.js';
import useStyles from './style.js';
import construction from '../../res/images/construction.webp';
import renovation from '../../res/images/renovation.webp';
import extension from '../../res/images/extension.webp';

import { useMediaQuery } from 'react-responsive';
import translate from '../../res/strings/strings.js';
const ServicesPage = (props,ref)=> {
	
	const classes = useStyles();
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div ref={ref} className={classes.servicesPage}>
			<div className={classes.container}>

				<Typography  className={classes.title} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
					{translate('services')}
				</Typography>
				<div className={isDesktopOrLaptop?classes.serviceList:classes.serviceListMobile}>
					<ServiceInfoCard img={construction} title={translate('construction')} description= {translate('constructionDescription')}/>
					<ServiceInfoCard img={renovation} title={translate('renovation')} description= {translate('renovationDescription')}/>
					<ServiceInfoCard img={extension} title={translate('extension')} description= {translate('extensionDescription')}/>

				</div>
			</div>
		</div>
     

	);
};
export default React.forwardRef(ServicesPage);
