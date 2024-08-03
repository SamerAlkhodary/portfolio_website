import React from 'react';
import  Typography  from '@mui/material/Typography';
import classes from './style.js';
import translate from '../../res/strings/strings.js';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const PageNotFoundPage =()=> {


	return (
						
		<div style={classes.pageNotfound}>
			<SentimentVeryDissatisfiedIcon  sx={{ fontSize: '4em',color:'white',alignSelf:'center' }}/>
			<Typography variant={'h5'} fontFamily={'Merriweather'}  style={classes.h1}>
				{
					translate('pageNotFound')
				}
			</Typography>
		</div>
						

	);
};
export default React.forwardRef(PageNotFoundPage);