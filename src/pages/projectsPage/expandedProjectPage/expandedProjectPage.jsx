import React, { useEffect } from 'react';
import projects from './projects.js';
import classes from './style.js';
import {useParams} from 'react-router-dom';
import ImageSection from './components/ImagesSection.jsx';
import { TitleSection } from './components/index.js';
import useTranslate from '../../../res/strings/strings.js';
import FullScreenImage from './components/FullscreenImage.jsx';
import { Footer } from '../../../components/index.js';
import CookieConsentModal from '../../../components/cookieConsentModal/CookieConsentModal.jsx';
import PageNotFoundPage from '../../pageNotFoundPage/pageNotFoundPage.jsx';

const ExpandedProjectPage = ()=> {
	const translate = useTranslate();

	useEffect(() => {
		window.scrollTo({
			top:0,
			behavior:'instant'
		});
		

	}, []);
	const params = useParams();
	const project = projects.find(p=>p.id==params.id);

	if(!project){
		return (
			<>
				<CookieConsentModal/>
				<PageNotFoundPage message={translate('projectNotFound')}/>
			</>
		);
	}

	return (
		<>
			<CookieConsentModal/>

			<div style={classes.page}>
				<div style={{position:'relative'}}>
					<FullScreenImage/>
					<TitleSection project={project}/>
					<ImageSection project={project}/>
				</div>
				<Footer edge></Footer>
			</div>
		</>

	);
};
export default React.forwardRef(ExpandedProjectPage);
