import React from 'react';
import { Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

import { ProjectCard } from './components';
import useStyles from './style.js';
import translate from '../../res/strings/strings.js';
import barbershop from '../../res/images/barbershop.webp';
import restaurant from '../../res/images/restaurant.webp';
import extension from '../../res/images/extension.webp';
//import { useMediaQuery } from 'react-responsive';
const ProjectsPage = (props,ref)=> {
	
	const classes = useStyles();
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div ref={ref} className={classes.servicesPage}>

			<Typography  className={classes.title} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
				{translate('projects')}
			</Typography>
			<div className={classes.container}>
				<div className={isDesktopOrLaptop?classes.serviceList:classes.serviceListMobile}>
					<ProjectCard img={barbershop} title={translate('barbershop')}/>
					<ProjectCard img={restaurant} title={translate('restaurant')} />
					<ProjectCard img={extension} title={translate('apartments')} />
				</div>
			</div>
		</div>
     

	);
};
export default React.forwardRef(ProjectsPage);
