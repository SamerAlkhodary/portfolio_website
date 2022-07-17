import React from 'react';
import { Typography } from '@mui/material';
import { ProjectCard } from './components';
import useStyles from './style.js';
import gmail from '../../res/gmail.png';
//import { useMediaQuery } from 'react-responsive';
const ProjectsPage = (props,ref)=> {
	
	const classes = useStyles();
	/*const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});*/
	return (
		<div ref={ref} className={classes.projectsPage}>
			<div className={classes.container}>

				<Typography  className={classes.title} variant='h4' fontFamily={'Merriweather'} fontWeight='bold'>
                Projects
				</Typography>
				<div className={classes.projectList}>
					<ProjectCard thumbnail={gmail} description= "heelo there this is a text for th dsdsdsadasdsadadas heelo there this is a text for th dsdsdsadasdsadadas heelo there this is a text for th dsdsdsadasdsadadas heelo there this is a text for th dsdsdsadasdsadadas"/>
					<ProjectCard thumbnail={gmail} description= "heelo there this is a text for th dsdsdsadasdsadadas heelo there this is a text for th dsdsdsadasdsadadas heelo there this is a text for th dsdsdsadasdsadadas heelo there this is a text for th dsdsdsadasdsadadas"/>
				</div>
			</div>
		</div>
     

	);
};
export default React.forwardRef(ProjectsPage);
