import React from 'react';
import { Typography } from '@mui/material';
import classes from './style.js';

// One service: gold icon, title, description, and concrete highlight bullets.
const ServiceItem = ({ Icon, title, description, highlights })=> (
	<div style={classes.card}>
		<Icon style={classes.icon}/>
		<Typography component='h3' variant='h6' fontFamily={'Merriweather'} fontWeight='bold' style={classes.title}>
			{title}
		</Typography>
		<Typography variant='body2' fontFamily={'Merriweather'} style={classes.desc}>
			{description}
		</Typography>
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

export default ServiceItem;
