import React from 'react';
import { Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import classes from './style.js';

// One service as an editorial row: name + short line on the left, the concrete
// highlights on the right (stacked on mobile), divided by a gold hairline.
const ServiceItem = ({ title, description, highlights })=> {
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
