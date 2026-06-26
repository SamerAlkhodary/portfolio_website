import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import projects from './projects.js';
import classes from './style.js';
import {useParams} from 'react-router-dom';
import ImageSection from './components/ImagesSection.jsx';
import { TitleSection, BeforeAfterSlider, MetaStrip, RelatedProjects, QuoteCta } from './components/index.js';
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
	const hasBeforeAfter = project && project.beforeImageCount > 0 && project.afterImageCount > 0;

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
					<MetaStrip project={project}/>
					{hasBeforeAfter &&
						<>
							<Typography variant={'h5'} fontFamily={'Merriweather'} style={classes.sectionTitle}>
								{translate('beforeAfterTitle')}
							</Typography>
							<BeforeAfterSlider
								beforeSrc={`/assets/images/projects/${project.id}/before/1.webp`}
								afterSrc={`/assets/images/projects/${project.id}/after/1.webp`}
							/>
						</>
					}
					<ImageSection project={project}/>
					<RelatedProjects project={project}/>
					<QuoteCta/>
				</div>
				<Footer edge></Footer>
			</div>
		</>

	);
};
export default React.forwardRef(ExpandedProjectPage);
