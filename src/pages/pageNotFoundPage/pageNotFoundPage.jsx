import React from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './style.js';
import useTranslate from '../../res/strings/strings.js';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const PageNotFoundPage =()=> {
	const translate = useTranslate();

	return (
		<div style={classes.pageNotfound}>
			<SentimentVeryDissatisfiedIcon sx={{ fontSize: '4em', color: '#EEC283' }}/>
			<Typography component='h1' variant='h1' fontFamily={'Merriweather'} fontWeight='bold' style={classes.code}>
				404
			</Typography>
			<Typography variant={'h5'} fontFamily={'Merriweather'} style={classes.h1}>
				{translate('pageNotFound')}
			</Typography>
			<Button component={Link} to='/' style={classes.button}>
				<Typography fontFamily={'Merriweather'} fontWeight={'bold'} fontSize={'1em'} color={'#242424'}>
					{translate('backHome')}
				</Typography>
			</Button>
		</div>
	);
};
export default React.forwardRef(PageNotFoundPage);
