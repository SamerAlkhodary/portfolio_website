import React from 'react';
import { Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import useTranslate from '../../../../res/strings/strings.js';
import classes from '../style.js';
import { areaImage } from '../projects.js';
import { SectionHeader } from './WorkSection.jsx';

// Finished areas that have no matched "before" — the parts of the result worth
// seeing on their own. They're the same `areas` list as the reveals, just the
// ones without a before shot. Each tile opens the fullscreen viewer.
const Gallery = ({ project })=> {
	const translate = useTranslate();
	const navigate = useNavigate();
	const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });

	const shots = project.areas?.filter(a=> !a.before) ?? [];
	if (!shots.length) return null;

	const open = (area)=> navigate(`#f=areas/${area.name}&id=after`);

	return (
		<div style={classes.section}>
			<div style={classes.galleryWrap}>
				<SectionHeader eyebrow='galleryEyebrow' title='galleryTitle'/>
				<div style={{
					...classes.galleryGrid,
					gridTemplateColumns: `repeat(${isDesktop ? Math.min(shots.length, 2) : 1}, 1fr)`,
					marginTop: 'clamp(1.5rem, 4vw, 2.4rem)',
				}}>
					{shots.map(area=> (
						<div
							key={area.name}
							className='detail-img-zoom'
							style={classes.galleryItem}
							role='button'
							tabIndex={0}
							aria-label={translate(area.caption, 'projectsInfo')}
							onClick={()=> open(area)}
							onKeyDown={(e)=>{ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(area); } }}>
							<img
								className='detail-img'
								style={classes.imgCover}
								src={areaImage(project.id, area.name, 'after')}
								alt={translate(area.caption, 'projectsInfo')}
								loading='lazy'/>
							<div style={classes.galleryScrim}/>
							<Typography style={classes.galleryCap} component='p'>
								{translate(area.caption, 'projectsInfo')}
							</Typography>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gallery;
