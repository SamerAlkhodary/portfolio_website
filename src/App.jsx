import { HeroPage,AboutPage,ContactPage, ServicesPage, ProjectsPage,ExtendedProjectPage } from './pages/index.js';
import React, {createRef} from 'react';
import classes from './style.js';
import{CustomAppBar, Menu} from './components/index.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


function App() {

	const heroRef= createRef();
	const aboutRef=createRef();
	const contactRef=createRef();
	const servicesRef=createRef();
	const projectsRef=createRef();

	const HomePage= ()=>{
		return(
			<div>
				<CustomAppBar refs={[aboutRef,servicesRef,projectsRef,contactRef]} heroRef={heroRef} style={classes.appBar} />
				<Menu  customRefs={[aboutRef,servicesRef,projectsRef,contactRef]} itemPressed={()=>{}}/>
				<div style={classes.body}>
					<HeroPage ref={heroRef} aboutRef={aboutRef}/>
					<AboutPage ref={aboutRef} />
					<ServicesPage ref={servicesRef}/>
					<ProjectsPage ref={projectsRef} />
					<ContactPage ref={contactRef} />
				</div>	
			</div>


		);
	};
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
			<Router>
				<Routes>
					<Route path='/portfolio_website' element= {<HomePage/>}/>
					<Route exact path='/portfolio_website/projects/:name' element= {<ExtendedProjectPage/>}/>
				</Routes>
			</Router>
				
		</ThemeProvider>


 
	);
}

export default App;
