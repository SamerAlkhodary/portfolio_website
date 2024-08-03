import React, { useEffect} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Consts from './consts.js';
import useAnalytics from './utils/analytics.js';
import PageNotFoundPage from './pages/pageNotFoundPage/pageNotFoundPage.jsx';
import {HomePage,CookiePolicyPage,ExtendedProjectPage} from './pages';

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
