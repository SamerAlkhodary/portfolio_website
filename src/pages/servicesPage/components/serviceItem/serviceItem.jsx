import React from 'react';
import { Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import useTranslate from '../../../../res/strings/strings.js';
import classes from './style.js';

// One service as an editorial row: name + short line (and, where we have real
// work for it, a small clickable thumbnail that opens that project) on the left;
// the concrete highlights on the right. Rows without a photo stay text-only —
// honest asymmetry, no filler. Divided by a gold hairline.
const ServiceItem = ({ title, description, highlights, image, to })=> {
	const translate = useTranslate();
	const navigate = useNavigate();
	const isDesktop = useMediaQuery({ query: '(min-width: 800px)' });

	return (
		<div style={isDesktop ? classes.row : classes.rowMobile}>
			<div>
				<Typography component='h3' variant={isDesktop ? 'h5' : 'h6'} fontFamily={'Merriweather'} fontWeight='bold' style={classes.title}>
					{title}
				</Typography>
				<Typography variant='body2' fontFamily={'Merriweather'} style={classes.desc}>
					{description}
				</Typography>
				{image && to &&
					<div
						style={classes.thumbLink}
						role='button'
						tabIndex={0}
						aria-label={`${translate('viewProject')}: ${title}`}
						onClick={()=> navigate(to)}
						onKeyDown={(e)=>{ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); navigate(to); } }}>
						<img src={image} alt={title} loading='lazy' style={classes.thumb}/>
						<Typography component='span' variant='body2' fontFamily={'Merriweather'} style={classes.viewProject}>
							{translate('viewProject')} →
						</Typography>
					</div>
				}
			</div>
			{highlights?.length > 0 &&
				<ul style={classes.list}>
					{highlights.map(item=> (
						<li key={item} style={classes.item}>
							<span style={classes.marker}/>
							<Typography component='span' variant='body2' fontFamily={'Merriweather'} style={classes.itemText}>
								{item}
							</Typography>
						</li>
					))}
				</ul>
			}
		</div>
	);
};

export default ServiceItem;
