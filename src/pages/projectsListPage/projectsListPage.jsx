import React, { useEffect, useState, useRef } from 'react';
import { Button, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import classes from './style.js';
import Consts from '../../consts.js';
import { CustomAppBar, Footer, Menu } from '../../components/index.js';
import CookieConsentModal from '../../components/cookieConsentModal/CookieConsentModal.jsx';
import { ProjectCard } from '../projectsPage/components';
import projects, { CATEGORY_LABEL } from '../projectsPage/expandedProjectPage/projects.js';
import useTranslate from '../../res/strings/strings.js';
import useAnalytics from '../../utils/analytics.js';

const CATEGORIES = ['all', 'residential', 'commercial', 'renovation'];

const ProjectsListPage = ()=> {
	const translate = useTranslate();
	const navigate = useNavigate();
	const { sendEvent } = useAnalytics();
	const nullRef = useRef(null);
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 900px)' });
	const [category, setCategory] = useState('all');

	useEffect(()=>{ window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

	const visible = projects.filter(p => category === 'all' || p.category === category);

	return (
		<>
			<CookieConsentModal/>
			<CustomAppBar refs={[]} heroRef={nullRef}/>
			<Menu customRefs={[]}/>
			<div style={classes.page}>
				<Typography component='h1' style={classes.title} variant='h4' fontFamily={'Merriweather'} fontWeight='bold'>
					{translate('projects')}
				</Typography>

				<div style={classes.filters}>
					{CATEGORIES.map(cat => (
						<Button
							key={cat}
							onClick={()=>{ setCategory(cat); sendEvent({ category: 'projects', action: 'filter', label: cat }); }}
							style={category === cat ? classes.chipActive : classes.chip}>
							<Typography fontFamily={'Merriweather'} fontWeight='bold' fontSize={'0.9em'} color={category === cat ? Consts.theme.secondary : Consts.theme.primary}>
								{translate(CATEGORY_LABEL[cat])}
							</Typography>
						</Button>
					))}
				</div>

				{visible.length === 0 ?
					<Typography style={classes.empty} fontFamily={'Merriweather'} variant='h6'>
						{translate('noProjectsInCategory')}
					</Typography>
					:
					<div style={{...classes.grid, gridTemplateColumns:`repeat(${isDesktopOrLaptop ? 3 : 2}, 1fr)`}}>
						{visible.map(p => (
							<ProjectCard
								key={p.id}
								img={`/assets/images/projects/${p.id}/hero_desktop.webp`}
								srcSet={`/assets/images/projects/${p.id}/hero_mobile.webp 1500w, /assets/images/projects/${p.id}/hero_desktop.webp 1700w`}
								title={translate(p.name, 'projectsInfo')}
								meta={`${translate(CATEGORY_LABEL[p.category])} · ${p.location} · ${p.year}`}
								onclick={()=>{ sendEvent({ category: 'projects', action: 'click', label: p.type }); navigate(`/projects/${p.id}/`); }}
							/>
						))}
					</div>
				}
			</div>
			<Footer edge/>
		</>
	);
};
export default ProjectsListPage;
