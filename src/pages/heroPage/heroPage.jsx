import React from 'react';
import Typography from '@mui/material/Typography';
import useStyles from './style.js';
import hero from '../../res/hero.png';
import { Button } from '@mui/material';
const HeroPage = (props,ref)=> {
	
	const classes = useStyles();
	return (
		<div ref={ref} className={classes.container} style={{height: '100vh',backgroundImage:hero}} >
			<img className={classes.hero} src={hero} alt="programming"/>
			<div className={classes.texts}>
				<Typography variant="h4" fontFamily={'Merriweather'} className={classes.h1}>
					{'Let’s build your mobile application with style'}
				</Typography>

				<Typography variant="h5" paragraph className={classes.h2}>
          
					{'  Programming and design services to build the best application for your customers'}
				</Typography>
				<Button  variant='filled' className={classes.button} style={{backgroundColor:'#a87267'}}>
					<Typography 
						fontFamily={'Merriweather'} 
						color='white' 
						fontSize={15} 
						fontWeight={'bold'}>
						{'LEARN MORE'}
					</Typography>
				</Button>

				
			</div>
			
		</div>
     

	);
};
export default React.forwardRef(HeroPage);
