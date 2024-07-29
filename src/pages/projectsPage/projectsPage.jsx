import React from 'react';
import { Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import { ProjectCard } from './components';
import classes from './style.js';
import translate from '../../res/strings/strings.js';
import projects from './expandedProjectPage/projects.js';
//import { useMediaQuery } from 'react-responsive';
const ProjectsPage = (props,ref)=> {
	const navigate = useNavigate();
	const projectCards = projects.map(p=>{
		return <ProjectCard 
			key={p.id}
			img={`/portfolio_website/assets/images/projects/${p.id}/hero.webp`} 
			title={translate(p.type,'projectsInfo')} 
			onclick={()=>navigate(`/portfolio_website/projects/${p.id}/`)}
		/>;
	

	});
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div ref={ref} style={classes.servicesPage}>

			<Typography  style={classes.title} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
				{translate('projects')}
			</Typography>
			<div style={classes.container}>
				<div style={isDesktopOrLaptop?classes.serviceList:classes.serviceListMobile}>
					{
						projectCards
					}
				</div>
			</div>
		</div>
     

	);
};
export default React.forwardRef(ProjectsPage);
