import React, { useCallback } from 'react';
import { Typography } from '@mui/material';
import projects from './projects.js';
import classes from './style.js';
import translate from '../../../res/strings/strings.js';
import {useParams} from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonthOutlined';
import PlaceIcon from '@mui/icons-material/PlaceOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
//import { useMediaQuery } from 'react-responsive';
const ExpandedProjectPage = (props,ref)=> {

	const params = useParams();
	const project = projects.find(p=>p.title==params.name);
	const Image = React.memo(function Image({style, src }) {
		return <img style={style} src={src} className="hero" />;
	});
	const beforeImages= useCallback(()=>{
		var images =[];
		for(let i=1; i<project.beforeImageCount;i++){
			images.push(<Image style={{height:'100vw',width:'100vw'}} src={`/portfolio_website/assets/images/projects/${project.title}/b-${i}.webp`} />);
		}
		return (
			<div>
				{images}
			</div>

		);

	},[project.beforeImageCount]);
	const afterImages= useCallback(()=>{
		var images =[];
		for(let i=1; i<=project.afterImageCount;i++){
			images.push(<Image style={{height:'100vw',width:'100vw'}} src={`/portfolio_website/assets/images/projects/${project.title}/a-${i}.webp`} />);
		}
		return (
			<div>
				{images}
			</div>

		);

	},[project.afterImageCount]);
	
	return (
		<div style={classes.page}>
			
			<div ref={ref} style={classes.container} >
				<Image style={classes.hero} src={`/portfolio_website/assets/images/projects/${project.title}/hero.webp`} />
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
			<Typography variant={'h5'}  fontFamily={'Merriweather'}  style={classes.title}>
				{translate('Before:')}
			</Typography>
			<div style={classes.imageList}>
				{
					beforeImages()
				}
			</div>
			<Typography variant={'h5'}  fontFamily={'Merriweather'}  style={classes.title}>
				{translate('After:')}
			</Typography>
			<div style={classes.imageList}>
				{
					afterImages()
				}
			</div>
		</div>
	);
};
export default React.forwardRef(ExpandedProjectPage);
