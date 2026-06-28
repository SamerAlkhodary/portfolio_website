import React,{useRef} from 'react';
import classes from './style.js';
import CookieConsentModal from '../../components/cookieConsentModal/CookieConsentModal.jsx';
import { CustomAppBar, Footer, Menu, StickyCallButton } from '../../components/index.js';
import HeroPage from '../heroPage/heroPage.jsx';
import AboutPage from '../aboutPage/aboutPage.jsx';
import StatsBandPage from '../statsBandPage/statsBandPage.jsx';
import ServicesPage from '../servicesPage/servicesPage.jsx';
import ProjectsPage from '../projectsPage/projectsPage.jsx';
import ExploreTeaser from '../exploreTeaser/exploreTeaser.jsx';
import ProjectEnquiryPage from '../projectEnquiryPage/projectEnquiryPage.jsx';

const HomePage =()=> {
	const heroRef= useRef(null);
	const aboutRef=useRef(null);
	const contactRef=useRef(null);
	const servicesRef=useRef(null);
	const projectsRef=useRef(null);

	return(
		<div >
		
			<CookieConsentModal/>
			<CustomAppBar refs={[aboutRef,servicesRef,projectsRef,contactRef]} heroRef={heroRef} style={classes.appBar} />
			<Menu  customRefs={[aboutRef,servicesRef,projectsRef,contactRef]} itemPressed={()=>{}}/>

			<div style={classes.body}>
				<HeroPage ref={heroRef} aboutRef={aboutRef}/>
				<AboutPage ref={aboutRef} />
				<StatsBandPage/>
				<ServicesPage ref={servicesRef}/>
				<ProjectsPage ref={projectsRef} />
				<ExploreTeaser/>
				<ProjectEnquiryPage ref={contactRef} />
				<Footer></Footer>
			</div>
			<StickyCallButton hideRefs={[contactRef]}/>
		</div>
	);



	
};
export default React.forwardRef(HomePage);