import React,{useRef, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import classes from './style.js';
import CookieConsentModal from '../../components/cookieConsentModal/CookieConsentModal.jsx';
import { CustomAppBar, Footer, Menu } from '../../components/index.js';
import HeroPage from '../heroPage/heroPage.jsx';
import AboutPage from '../aboutPage/aboutPage.jsx';
import ServicesPage from '../servicesPage/servicesPage.jsx';
import ProjectsPage from '../projectsPage/projectsPage.jsx';
import ContactPage from '../contactPage/contactPage.jsx';

const HomePage =()=> {
	const heroRef= useRef(null);
	const aboutRef=useRef(null);
	const contactRef=useRef(null);
	const servicesRef=useRef(null);
	const projectsRef=useRef(null);
	const location = useLocation();

	// Honour deep links like /#contact (e.g. the "get a quote" CTA on a project page).
	useEffect(()=>{
		if(location.hash !== '#contact') return;
		const id = requestAnimationFrame(()=>{
			contactRef.current?.scrollIntoView({ behavior: 'smooth' });
		});
		return ()=> cancelAnimationFrame(id);
	}, [location.hash]);

	return(
		<div >
		
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
export default React.forwardRef(HomePage);