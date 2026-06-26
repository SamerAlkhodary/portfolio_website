import React from 'react';
import { Button, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { ProjectCard } from './components';
import classes from './style.js';
import Consts from '../../consts.js';
import useTranslate from '../../res/strings/strings.js';
import projects from './expandedProjectPage/projects.js';
import useAnalytics from '../../utils/analytics.js';
const ProjectsPage = (props,ref)=> {
	const {sendEvent} = useAnalytics();
	const translate = useTranslate();
	const navigate = useNavigate();
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 900px)' });
	const featured = projects.filter(p => p.featured);

	return (
		<div ref={ref} style={classes.projectsPage}>
			<Typography  component='h2' style={classes.title} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
				{translate('projects')}
			</Typography>
			<div style={{...classes.grid, gridTemplateColumns:`repeat(${isDesktopOrLaptop ? 3 : 1}, 1fr)`}}>
				{featured.map(p => (
					<ProjectCard
						key={p.id}
						img={`/assets/images/projects/${p.id}/hero_desktop.webp`}
						srcSet={`/assets/images/projects/${p.id}/hero_mobile.webp 1500w, /assets/images/projects/${p.id}/hero_desktop.webp 1700w`}
						title={translate(p.name, 'projectsInfo')}
						meta={`${translate(p.type, 'projectsInfo')} · ${p.location} · ${p.year}`}
						teaser={translate(p.description, 'projectsInfo')}
						onclick={()=>{
							sendEvent({ category: 'projects', action: 'click', label: p.type });
							navigate(`/projects/${p.id}/`);
						}}
					/>
				))}
			</div>
			<Button
				onClick={()=>{ sendEvent({ category: 'projects', action: 'click', label: 'view_all' }); navigate('/projects'); }}
				style={classes.viewAll}>
				<Typography fontFamily={'Merriweather'} fontWeight='bold' fontSize={'1em'} color={Consts.theme.primary}>
					{translate('viewAllProjects')}
				</Typography>
			</Button>
		</div>

	);
};
export default React.forwardRef(ProjectsPage);
