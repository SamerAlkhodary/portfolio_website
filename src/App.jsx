import React, { useEffect} from 'react';
import { useAtom } from 'jotai';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { languageAtom } from './atoms';
import Consts from './consts.js';
import useAnalytics from './utils/analytics.js';
import PageNotFoundPage from './pages/pageNotFoundPage/pageNotFoundPage.jsx';
import {HomePage,CookiePolicyPage,ExtendedProjectPage,ProjectsListPage,HowWeWorkPage,FaqRoutePage} from './pages';

function App() {
	const {getConsentObject,enableTracking,clearTracking} = useAnalytics();
	const [language] = useAtom(languageAtom);

	// Keep <html lang> in sync with the chosen language so screen readers pick
	// the right voice and crawlers read the correct content language. index.html
	// ships lang="hu"; this updates it when the user switches to English.
	useEffect(()=>{
		document.documentElement.lang = language === 'en-US' ? 'en' : 'hu';
	},[language]);

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
					<Route exact path='/projects' element= {<ProjectsListPage/>}/>
					<Route exact path='/projects/:id' element= {<ExtendedProjectPage/>}/>
					<Route exact path='/how-we-work' element= {<HowWeWorkPage/>}/>
					<Route exact path='/faq' element= {<FaqRoutePage/>}/>
					<Route exact path='*' element= {<PageNotFoundPage/>}/>
				</Routes>
			</Router>
				
		</ThemeProvider>
	);
}

export default App;
