import { HeroPage,AboutPage,ContactPage, ServicesPage, ProjectsPage,ExtendedProjectPage, CookiePolicyPage } from './pages/index.js';
import React, {createRef, useEffect} from 'react';
import classes from './style.js';
import{CustomAppBar, Footer, Menu} from './components/index.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Consts from './consts.js';
import CookieConsentModal from './components/cookieConsentModal/CookieConsentModal.jsx';
import useAnalytics from './utils/analytics.js';
import PageNotFoundPage from './pages/pageNotFoundPage/pageNotFoundPage.jsx';

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
	const imageRef = createRef();
	const HomePage= ()=>{
		useEffect(() => {
			console.log(imageRef.current.style.position);
			const handleScroll = () => {
				
				const imageBottom = imageRef.current.getBoundingClientRect().bottom;
				const windowHeight = window.innerHeight;
		
				if (imageBottom <= windowHeight) {
					imageRef.current.style.position = 'relative';
				} else {
					imageRef.current.style.position = 'fixed';
					imageRef.current.style.top = '0';
					imageRef.current.style.left = '0';
				}
			};
		
			window.addEventListener('scroll', handleScroll);
		
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}, []);
		return(
			<div style={{
				position: 'relative',
				height:'100vh',
				overflow: 'auto',
			}}>
				<div ref={imageRef}
					style={{
						position: 'fixed',
						opacity:0.5,
						top: 0,
						left: 0,
						width: '100vw',
						height: '100vh',
						backgroundSize: 'cover', /* Ensures the image covers the entire container */
						backgroundPosition: 'center', /* Centers the image within the container */
						backgroundRepeat: 'no-repeat', /* Prevents the image from repeating */
						zIndex: 1,
						backgroundImage: 'url(/assets/images/hero2.webp)',
					}}
				></div>
				<div style={{
					position: 'relative',
					
					zIndex: 1,  
				}}>
					<CookieConsentModal/>
					<CustomAppBar refs={[aboutRef,servicesRef,projectsRef,contactRef]} heroRef={heroRef} style={classes.appBar} />
					<Menu  customRefs={[aboutRef,servicesRef,projectsRef,contactRef]} itemPressed={()=>{}}/>
					<HeroPage ref={heroRef} aboutRef={aboutRef}/>

					<div style={classes.body}>
						<AboutPage ref={aboutRef} />
						<ServicesPage ref={servicesRef}/>
						<ProjectsPage ref={projectsRef} />
						<ContactPage ref={contactRef} />
						<Footer></Footer>
					</div>	
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
					<Route exact path='*' element= {<PageNotFoundPage/>}/>
				</Routes>
			</Router>
				
		</ThemeProvider>
	);
}

export default App;
