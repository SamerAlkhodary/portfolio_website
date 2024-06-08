import React from 'react';
import Typography from '@mui/material/Typography';
import useStyles from './style.js';
import hero from '../../res/hero.webp';
import { Button } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import Consts from '../../consts.js';

const HeroPage = (props,ref)=> {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	const classes = useStyles();
	return (
		<div ref={ref} className={classes.container} style={{height: '100vh'}} >
			<img className={classes.hero} src={hero} alt="programming"/>
			<div className={isDesktopOrLaptop?classes.textsDesktop:classes.textsMobile}>
				<Typography variant={isDesktopOrLaptop?'h4':'h5'} paragraph fontFamily={'Merriweather'} className={classes.h1}>
					{'We build your home, you fill them with memories'}
				</Typography>

				<Typography  variant={isDesktopOrLaptop?'h5':'h6'} paragraph className={classes.h2} fontFamily={'Merriweather'}>
          
					{'Construction and renovation services to give you the home you deserve'}
				</Typography>
				<Button  variant='filled' className={classes.button} style={{backgroundColor:'#EEC283'}}>
					<Typography 
						fontFamily={'Merriweather'} 
						color= {Consts.theme.secondary}
						fontSize={'1em'}
						fontWeight={'bold'}>
						{'LEARN MORE'}
					</Typography>
				</Button>

				
			</div>
			
		</div>
     

	);
};
export default React.forwardRef(HeroPage);
