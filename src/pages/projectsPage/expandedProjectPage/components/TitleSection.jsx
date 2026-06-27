import { Typography } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import useTranslate from '../../../../res/strings/strings.js';
import classes from '../style.js';

// Full-bleed hero: the strongest finished shot fills the frame, the name and a
// single Space Grotesk spec line sit on a bottom scrim. The eyebrow carries the
// facts that used to live in a separate meta strip (type · location · year).
const TitleSection = ({ project })=> {
	const translate = useTranslate();
	const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });

	const facts = [
		translate(project.type, 'projectsInfo'),
		project.location,
		project.duration || project.year,
	].filter(Boolean);

	return (
		<header style={classes.hero}>
			<img
				style={classes.heroImg}
				src={`/assets/images/projects/${project.id}/hero_desktop.webp`}
				srcSet={`/assets/images/projects/${project.id}/hero_mobile.webp 1500w, /assets/images/projects/${project.id}/hero_desktop.webp 1700w`}
				alt={translate(project.name, 'projectsInfo')}/>
			<div style={classes.heroScrim}/>
			<div style={classes.heroContent}>
				<div style={classes.heroInner}>
					<Typography style={classes.heroEyebrow} component='p'>
						{facts.join('  ·  ')}
					</Typography>
					<Typography
						style={classes.heroTitle}
						variant={isDesktop ? 'h2' : 'h3'}
						fontFamily={'Merriweather'}
						fontWeight='bold'
						component='h1'>
						{translate(project.name, 'projectsInfo')}
					</Typography>
					<Typography style={classes.heroDesc} variant='body1' fontFamily={'Merriweather'}>
						{translate(project.description, 'projectsInfo')}
					</Typography>
				</div>
			</div>
		</header>
	);
};

export default TitleSection;
