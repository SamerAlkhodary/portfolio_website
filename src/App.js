import { HeroPage,AboutPage,ContactPage } from './pages';
import React, {createRef} from 'react';
import useStyles from './style.js';
import{CustomAppBar} from './components';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
	const classes = useStyles();
	const heroRef= createRef();
	const aboutRef=createRef();
	const contactRef=createRef();

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
			<body className={classes.page}>
				<HeroPage ref={heroRef}/>
				<CustomAppBar refs={[aboutRef,contactRef]} heroRef={heroRef} className={classes.appBar} />
				<AboutPage ref={aboutRef}  />
				<ContactPage ref={contactRef} > </ContactPage>
			</body>
		</ThemeProvider>


 
	);
}

export default App;
