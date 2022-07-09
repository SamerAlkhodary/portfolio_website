import React from 'react';
import { Typography } from '@mui/material';
import useStyles from './style.js';
import hero from '../../res/hero.png';

const HeroPage = (props,ref)=> {
	const classes = useStyles();
	return (
		<div ref={ref} className={classes.container}>
			<img className={classes.hero} src={hero} alt="programming" />
			<Typography variant="h4" className={classes.h1}>
				{'Let’s build your mobile application with style'}
			</Typography>

			<Typography variant="h5" paragraph className={classes.h2}>
          
				{'  Programming and design services to build the best application for your customers'}
			</Typography>

			<button variant="contained" className={classes.button}>
				<Typography fontSize={15} fontWeight={'bold'}>{'LEARN MORE'}</Typography>
			</button>
		</div>
     

	);
};
export default React.forwardRef(HeroPage);
