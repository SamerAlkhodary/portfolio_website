import React from 'react';
import { Typography } from '@mui/material';
import useStyles from './style.js';
import profile from '../../res/profile.jpg';
import { useMediaQuery } from 'react-responsive';


const AboutPage =(props,ref)=> {

	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1224px)'});
	const classes = useStyles();

	return (	
		<div ref={ref} className={isDesktopOrLaptop?classes.aboutPageDesktop:classes.aboutPageMobile} >
			<div className={classes.profileBg}>
				<img className={classes.profileImg} src={profile} alt="profile" />
			</div>
			<div className={isDesktopOrLaptop?classes.textsDesktop:classes.textsMobile}>
				<Typography fontFamily={'Merriweather'} fontWeight={'bold'} variant="h5">
					{'Hello, I am Samer Alkhodary, and I am a Software Engineer.'}
				</Typography>
				<di className={classes.padding} />
				
				<Typography fontFamily={'Merriweather'} variant="h5">
				
					I have a master&apos;s degree in Computer Engineering from Lund University. In my master&apos;s thesis I studied the impact of the BFF design pattern in a microservices environment, and this the <a href="https://fileadmin.cs.lth.se/cs/Education/Examensarbete/Popsci/220608_09Alkhodary.pdf"> popular summary</a> .
				</Typography>
				
			</div>
		</div>
	);
};
export default React.forwardRef(AboutPage);