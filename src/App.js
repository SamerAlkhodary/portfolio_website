import { HeroPage,AboutPage,ContactPage, ServicesPage, ProjectsPage } from './pages';
import React, {createRef} from 'react';
import useStyles from './style.js';
import{CustomAppBar, Menu} from './components';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';


function App() {

	const classes = useStyles();
	const heroRef= createRef();
	const aboutRef=createRef();
	const contactRef=createRef();
	const servicesRef=createRef();
	const projectsRef=createRef();


	const theme = createTheme({
		typography: {
			fontFamily: [
				'Merriweather',
				'Helvetica Neue',
				'Arial',
				'sans-serif'
			].join(',')
		}
	});
	return (
		<ThemeProvider theme={theme}>
			<CustomAppBar refs={[aboutRef,servicesRef,projectsRef,contactRef]} heroRef={heroRef} className={classes.appBar} />
			<Menu  customRefs={[aboutRef,servicesRef,projectsRef,contactRef]} itemPressed={()=>{}}/>
			<div className={classes.body}>
				<HeroPage ref={heroRef} aboutRef={aboutRef}/>
				<AboutPage ref={aboutRef} />
				<ServicesPage ref={servicesRef}/>
				<ProjectsPage ref={projectsRef} />
				<ContactPage ref={contactRef} />
			</div>	
				
		</ThemeProvider>


 
	);
}

export default App;
