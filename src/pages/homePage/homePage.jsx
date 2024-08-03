import React,{createRef} from 'react';
import classes from './style.js';
import CookieConsentModal from '../../components/cookieConsentModal/CookieConsentModal.jsx';
import { CustomAppBar, Footer, Menu } from '../../components/index.js';
import HeroPage from '../heroPage/heroPage.jsx';
import AboutPage from '../aboutPage/aboutPage.jsx';
import ServicesPage from '../servicesPage/servicesPage.jsx';
import ProjectsPage from '../projectsPage/projectsPage.jsx';
import ContactPage from '../contactPage/contactPage.jsx';

const HomePage =()=> {
	const heroRef= createRef();
	const aboutRef=createRef();
	const contactRef=createRef();
	const servicesRef=createRef();
	const projectsRef=createRef();

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