import { Typography } from '@mui/material';
import React from 'react';
import translate from '../../../../res/strings/strings.js';
import classes from './style.js';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonthOutlined';
import PlaceIcon from '@mui/icons-material/PlaceOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const TitleSection = ({project})=> {
	const Image = React.memo(function Image({style, src }) {
		return <img style={style} src={src} className="hero" />;
	});
	return (
		<div  style={classes.container} >
			<Image style={classes.hero} src={`/portfolio_website/assets/images/projects/${project.id}/hero.webp`} />
			<div style={classes.info}>
				<div style={classes.texts}>
					<Typography variant={'h5'}  fontFamily={'Merriweather'} fontWeight='bold' style={classes.h1}>
						{translate(project.name,'projectsInfo')}
					</Typography>
					<Typography  variant={'h6'} paragraph style={classes.h2} fontFamily={'Merriweather'}>
						{translate(project.description,'projectsInfo')}
					</Typography>
				</div>
				<div style={classes.iconRow}>
					<div style={classes.iconItem}>
						<InfoOutlinedIcon  sx={{ fontSize: 30,color:'white',alignSelf:'center' }}></InfoOutlinedIcon>
						<Typography variant={'h7'}  fontFamily={'Merriweather'}  style={classes.h1}>
							{translate(project.type,'projectsInfo')}
						</Typography>
					</div>
					<div style={classes.iconItem}>
						<PlaceIcon  sx={{ fontSize: 30,color:'white',alignSelf:'center' }}></PlaceIcon>
						<Typography variant={'h7'}  fontFamily={'Merriweather'}  style={classes.h1}>
							{translate(project.location,'projectsInfo')}
						</Typography>
					</div>
					<div style={classes.iconItem}>
						<CalendarMonthIcon  sx={{ fontSize: 30,color:'white',alignSelf:'center' }}></CalendarMonthIcon>
						<Typography variant={'h7'}  fontFamily={'Merriweather'}  style={classes.h1}>
							{translate(project.startDate,'projectsInfo')}
						</Typography>
					</div>
					
				</div>
					
			</div>
			
		</div>
			
	);

};
export default TitleSection;
