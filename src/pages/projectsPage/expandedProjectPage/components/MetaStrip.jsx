import React from 'react';
import { Typography } from '@mui/material';
import useTranslate from '../../../../res/strings/strings.js';
import classes from './style.js';

// Scannable metadata strip below the hero. Each item renders only when the
// project actually carries that field, so it degrades gracefully (e.g. duration
// is optional in the schema).
const MetaStrip = ({ project })=> {
	const translate = useTranslate();
	const items = [
		{ label: 'metaScope', value: translate(project.type, 'projectsInfo') },
		{ label: 'metaDuration', value: project.duration },
		{ label: 'metaLocation', value: project.location },
		{ label: 'metaYear', value: project.year },
	].filter(item => item.value);

	const Item = ({ label, value })=> (
		<div style={classes.metaItem}>
			<Typography style={classes.metaLabel} variant='body2' fontFamily={'Merriweather'}>
				{translate(label)}
			</Typography>
			<Typography style={classes.metaValue} variant='body1' fontFamily={'Merriweather'} fontWeight='bold'>
				{value}
			</Typography>
		</div>
	);

	return (
		<div style={classes.metaStrip}>
			{items.map(item => <Item key={item.label} label={item.label} value={item.value}/>)}
		</div>
	);
};
export default MetaStrip;
