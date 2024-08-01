import { HeroPage,AboutPage,ContactPage, ServicesPage, ProjectsPage,ExtendedProjectPage } from './pages/index.js';
import React, {createRef, useCallback, useEffect} from 'react';
import classes from './style.js';
import{CustomAppBar, Footer, Menu} from './components/index.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import {Cookies} from 'react-cookie-consent';
import ReactGA from 'react-ga4';

import Consts from './consts.js';


function App() {
	useEffect(()=>{
		const cookie = Cookies.get('analytics-consent');
		if(cookie === undefined){
			document.body.style.overflow = 'hidden';
		}else if(cookie === 'true'){
			const TRACKING_ID = 'G-JKWK78TVMF';
			ReactGA.initialize(TRACKING_ID);
			document.body.style.overflow = 'auto';
		}else{
			ReactGA.reset();
			Cookies.remove('_ga');
			Cookies.remove('_ga_JKWK78TVMF');
			document.body.style.overflow = 'auto';
		}
	},[Cookies,ReactGA,document.body.style.overflow]);

	const acceptCookie= useCallback(()=>{
		document.body.style.overflow = 'auto';

	},[document.body.style.overflow]);
	const declineCookies= useCallback(()=>{
		document.body.style.overflow = 'auto';

	},[document.body.style.overflow]);

	const cookieConcentBanner = useCallback(()=>{
		return <CookieConsent
			style={classes.cookie}
			enableDeclineButton
			cookieName="analytics-consent"
			onAccept={acceptCookie}
			onDecline={declineCookies}
			buttonText="Accept"
			buttonStyle={{ backgroundColor: Consts.theme.accent, color:  Consts.theme.secondary,fontSize:'0.8em',fontWeight:'bold',fontFamily:Consts.theme.fontFamily}}
			declineButtonText="Reject"
			declineButtonStyle={{ backgroundColor: Consts.theme.secondary, color: Consts.theme.primary,fontSize:'0.8em',fontWeight:'bold',fontFamily:Consts.theme.fontFamily }}
			overlay
		>
			{'This website uses cookies to enhance user experience. Cookies will be used for analytics, and third-party tracking.'}
		</CookieConsent>;
	},[CookieConsent,declineCookies,acceptCookie]);

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
			{cookieConcentBanner()}
			<Router>
				<Routes>
					<Route exact path='/' element= {<HomePage/>}/>
					<Route exact path='/projects/:id' element= {<ExtendedProjectPage/>}/>
				</Routes>
			</Router>
				
		</ThemeProvider>


 
	);
}

export default App;
