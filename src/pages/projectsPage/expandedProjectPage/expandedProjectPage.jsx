import React, { useEffect } from 'react';
import projects from './projects.js';
import classes from './style.js';
import {useParams} from 'react-router-dom';
import ImageSection from './components/ImagesSection.jsx';
import { TitleSection } from './components/index.js';
import translate from '../../../res/strings/strings.js';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Typography } from '@mui/material';
import FullScreenImage from './components/FullscreenImage.jsx';
import { Footer } from '../../../components/index.js';

const ExpandedProjectPage = ()=> {

	useEffect(() => {
		window.scrollTo({
			top:0,
			behavior:'instant'
		});
		

	}, [window]);
	const params = useParams();
	const project = projects.find(p=>p.id==params.id);
	return (
		<div style={classes.page}>
			{
				project? 
					<div style={{position:'relative'}}>
						<FullScreenImage/>
						<TitleSection project={project}/>
						<ImageSection project={project}/>
					</div>:
					<div style={classes.pageNotfound}>
						<SentimentVeryDissatisfiedIcon  sx={{ fontSize: '4em',color:'white',alignSelf:'center' }}/>
						<Typography variant={'h5'} fontFamily={'Merriweather'}  style={classes.h1}>
							{
								translate('projectNotFound')
							}
						</Typography>
					</div>
			}
			<Footer></Footer>
		</div>
	);
};
export default React.forwardRef(ExpandedProjectPage);
