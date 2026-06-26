import React from 'react';
import { Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { ProjectCard } from '../../components';
import projects from '../projects.js';
import useTranslate from '../../../../res/strings/strings.js';
import useAnalytics from '../../../../utils/analytics.js';
import classes from './style.js';

// Other projects to keep the visitor browsing — same category first, then the
// rest, capped at three.
const RelatedProjects = ({ project })=> {
	const translate = useTranslate();
	const navigate = useNavigate();
	const { sendEvent } = useAnalytics();
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 900px)' });

	const others = projects.filter(p => p.id !== project.id);
	const related = [
		...others.filter(p => p.category === project.category),
		...others.filter(p => p.category !== project.category),
	].slice(0, 3);

	if(related.length === 0) return null;

	return (
		<div style={classes.relatedSection}>
			<Typography component='h2' style={classes.title} variant='h5' fontFamily={'Merriweather'}>
				{translate('relatedProjects')}
			</Typography>
			<div style={{...classes.relatedGrid, gridTemplateColumns:`repeat(${isDesktopOrLaptop ? 3 : 1}, 1fr)`}}>
				{related.map(p => (
					<ProjectCard
						key={p.id}
						img={`/assets/images/projects/${p.id}/hero_desktop.webp`}
						srcSet={`/assets/images/projects/${p.id}/hero_mobile.webp 1500w, /assets/images/projects/${p.id}/hero_desktop.webp 1700w`}
						title={translate(p.name, 'projectsInfo')}
						meta={`${translate(p.type, 'projectsInfo')} · ${p.location} · ${p.year}`}
						onclick={()=>{
							sendEvent({ category: 'projects', action: 'click', label: `related_${p.type}` });
							navigate(`/projects/${p.id}/`);
						}}
					/>
				))}
			</div>
		</div>
	);
};
export default RelatedProjects;
