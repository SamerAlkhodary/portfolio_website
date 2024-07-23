import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import projects from './projects.js';
import classes from './style.js';
import translate from '../../../res/strings/strings.js';
import {useNavigate, useParams} from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonthOutlined';
import PlaceIcon from '@mui/icons-material/PlaceOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
//import { useMediaQuery } from 'react-responsive';
const ExpandedProjectPage = (props,ref)=> {
	const navigate = useNavigate();

	const params = useParams();
	const project = projects.find(p=>p.title==params.name);
	const Image = React.memo(function Image({ src }) {
		return <img style={classes.hero} src={src} className="hero" />;
	});
	
	return (
		<div style={classes.page}>
			<AppBar position="fixed" style={classes.appBarHero} elevation={0}>
				<Toolbar style={{padding:0}}>
					<IconButton sx={{margin:0,padding:0,flex:1,justifyContent:'start'}} onClick={()=>{navigate(-1);}}>
						<ArrowBackOutlinedIcon sx={{color:'white',alignSelf:'center'}}></ArrowBackOutlinedIcon>
					</IconButton>
				</Toolbar>
			</AppBar>
			
			<div ref={ref} style={classes.container} >
				<Image src={`/portfolio_website/assets/images/projects/${project.title}/hero.webp`} />
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

		</div>
	);
};
export default React.forwardRef(ExpandedProjectPage);
