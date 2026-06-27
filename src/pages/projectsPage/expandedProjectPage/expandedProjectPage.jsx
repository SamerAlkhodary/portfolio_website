import React, { useEffect, useRef } from 'react';
import projects from './projects.js';
import classes from './style.js';
import { useParams } from 'react-router-dom';
import { TitleSection, WorkSection, Gallery, RelatedProjects, QuoteCta } from './components/index.js';
import useTranslate from '../../../res/strings/strings.js';
import FullScreenImage from './components/FullscreenImage.jsx';
import { Footer, StickyCallButton } from '../../../components/index.js';
import CookieConsentModal from '../../../components/cookieConsentModal/CookieConsentModal.jsx';
import PageNotFoundPage from '../../pageNotFoundPage/pageNotFoundPage.jsx';

const ExpandedProjectPage = ()=> {
	const translate = useTranslate();
	const ctaRef = useRef(null);
	const footerRef = useRef(null);

	const params = useParams();
	const project = projects.find(p=>p.id==params.id);

	// Scroll to top whenever the project changes. Navigating between projects
	// reuses this component (only :id changes), so this must depend on params.id
	// — an empty-deps effect fires only on first mount and leaves you at the
	// bottom after tapping a related project.
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'instant' });
	}, [params.id]);

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
					<WorkSection project={project}/>
					<Gallery project={project}/>
					<RelatedProjects project={project}/>
					<div ref={ctaRef}>
						<QuoteCta project={project}/>
					</div>
				</div>
				<div ref={footerRef}>
					<Footer edge></Footer>
				</div>
			</div>
			<StickyCallButton hideRefs={[ctaRef, footerRef]}/>
		</>

	);
};
export default React.forwardRef(ExpandedProjectPage);
