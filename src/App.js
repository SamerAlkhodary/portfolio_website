import { HeroPage,AboutPage,ContactPage } from './pages';
import React, {createRef} from 'react';
import useStyles from './style.js';
import{CustomAppBar} from './components';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import ProjectsPage from './pages/projectsPage/projectsPage';

function App() {
	const classes = useStyles();
	const heroRef= createRef();
	const aboutRef=createRef();
	const contactRef=createRef();
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
			<div className={classes.page}>
				<HeroPage ref={heroRef}/>
				<CustomAppBar refs={[aboutRef,projectsRef,contactRef]} heroRef={heroRef} className={classes.appBar} />
				<AboutPage ref={aboutRef}  />
				<ProjectsPage ref={projectsRef}/>
				<ContactPage ref={contactRef} > </ContactPage>
			</div>
		</ThemeProvider>


 
	);
}

export default App;
