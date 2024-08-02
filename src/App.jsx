import { HeroPage,AboutPage,ContactPage, ServicesPage, ProjectsPage,ExtendedProjectPage, CookiePolicyPage } from './pages/index.js';
import React, {createRef, useEffect} from 'react';
import classes from './style.js';
import{CustomAppBar, Footer, Menu} from './components/index.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Consts from './consts.js';
import CookieConsentModal from './components/cookieConsentModal/CookieConsentModal.jsx';
import useAnalytics from './utils/analytics.js';

function App() {
	const {getConsentObject,enableTracking,clearTracking} = useAnalytics();

	useEffect(()=>{
		if(Consts.config.enableAnalytics === true){
			const consentObject= getConsentObject();
			if(consentObject?.analytics === true){
				enableTracking();
			}else{
				clearTracking();
			}
		}else{
			clearTracking();
		}
	},[enableTracking,clearTracking,Consts.config.enableAnalytics,getConsentObject]);

	const heroRef= createRef();
	const aboutRef=createRef();
	const contactRef=createRef();
	const servicesRef=createRef();
	const projectsRef=createRef();

	const HomePage= ()=>{
		return(
			<div>
				<CookieConsentModal/>
				<CustomAppBar refs={[aboutRef,servicesRef,projectsRef,contactRef]} heroRef={heroRef} style={classes.appBar} />
				<Menu  customRefs={[aboutRef,servicesRef,projectsRef,contactRef]} itemPressed={()=>{}}/>
				<div style={classes.body}>
					<HeroPage ref={heroRef} aboutRef={aboutRef}/>
					<AboutPage ref={aboutRef} />
					<ServicesPage ref={servicesRef}/>
					<ProjectsPage ref={projectsRef} />
					<ContactPage ref={contactRef} />
					<Footer></Footer>
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
					<Route exact path='/cookie-policy' element={<CookiePolicyPage/>}/>
					<Route exact path='/' element= {<HomePage/>}/>
					<Route exact path='/projects/:id' element= {<ExtendedProjectPage/>}/>
				</Routes>
			</Router>
				
		</ThemeProvider>
	);
}

export default App;
