import React from 'react';
import { Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import useTranslate from '../../../../res/strings/strings.js';
import classes from '../style.js';
import RevealImage from './RevealImage.jsx';

// Shared section heading: a Space Grotesk eyebrow over a Merriweather title.
export const SectionHeader = ({ eyebrow, title })=> {
	const translate = useTranslate();
	return (
		<div style={classes.secHeader}>
			<Typography style={classes.eyebrow} component='p'>{translate(eyebrow)}</Typography>
			<Typography style={classes.secTitle} variant='h4' fontFamily={'Merriweather'} fontWeight='bold' component='h2'>
				{translate(title)}
			</Typography>
		</div>
	);
};

// The transformation narrative. A project carries EITHER named areas (those
// with a `before` become gold-seam reveals, alternating sides) OR an ordered set
// of progress photos (stages → numbered timeline). We never fake one from the
// other, so the structure follows whatever honest material the project has.
const WorkSection = ({ project })=> {
	const translate = useTranslate();
	const navigate = useNavigate();
	const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });

	const reveals = project.areas?.filter(a=> a.before) ?? [];

	if (reveals.length) {
		return (
			<div style={classes.section}>
				<SectionHeader eyebrow='storyEyebrow' title='storyTitle'/>
				<div style={classes.storyWrap}>
					{reveals.map((area, i)=> (
						<div
							key={area.name}
							style={{
								...classes.storyRow,
								flexDirection: isDesktop ? (i % 2 ? 'row-reverse' : 'row') : 'column',
							}}>
							<div style={classes.revealHold}>
								<RevealImage projectId={project.id} area={area.name}/>
							</div>
							<div style={classes.storyText}>
								<Typography style={classes.storyKicker} component='p'>
									{translate('baBefore')} → {translate('baAfter')}
								</Typography>
								<Typography style={classes.storyArea} variant='h5' fontFamily={'Merriweather'} component='h3'>
									{translate(area.caption, 'projectsInfo')}
								</Typography>
								<Typography style={classes.storyHint} component='p'>
									<SwapHorizIcon sx={{ fontSize: 18, color: '#9a958c' }}/>
									{translate('storyHint')}
								</Typography>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}

	if (project.stages?.length) {
		const total = project.stages.length;
		return (
			<div style={classes.section}>
				<SectionHeader eyebrow='timelineEyebrow' title='timelineTitle'/>
				<div style={classes.timelineWrap}>
					{project.stages.map((stage, i)=> {
						const last = i === total - 1;
						const num = String(i + 1).padStart(2, '0');
						return (
							<div key={stage.caption} style={classes.timelineItem}>
								<div style={classes.timelineCol}>
									<div style={{ ...classes.timelineNode, ...(last ? classes.timelineNodeDone : {}) }}>
										{num}
									</div>
									{!last && <div style={classes.timelineLine}/>}
								</div>
								<div style={classes.timelineBody}>
									<Typography style={classes.timelineStage} component='p'>
										{num} / {String(total).padStart(2, '0')}
									</Typography>
									<Typography style={classes.timelineArea} variant='h5' fontFamily={'Merriweather'} component='h3'>
										{translate(stage.caption, 'projectsInfo')}
									</Typography>
									<div
										className='detail-img-zoom'
										style={classes.timelineImgHold}
										role='button'
										tabIndex={0}
										aria-label={translate(stage.caption, 'projectsInfo')}
										onClick={()=> navigate(`#f=${stage.folder}&id=${stage.id}`)}
										onKeyDown={(e)=>{ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); navigate(`#f=${stage.folder}&id=${stage.id}`); } }}>
										<img
											className='detail-img'
											style={classes.imgCover}
											src={`/assets/images/projects/${project.id}/${stage.folder}/${stage.id}.webp`}
											alt={translate(stage.caption, 'projectsInfo')}
											loading='lazy'/>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}

	return null;
};

export default WorkSection;
