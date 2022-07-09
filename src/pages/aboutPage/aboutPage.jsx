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
					{'I have a master\'s degree in Computer Engineering from Lund University. I love programming and coming up with new project ideas to implement whether they were an online multiplayer game, an app or implementing encryption schemes and security protocols.'}
				</Typography>
			</div>
		</div>
	);
};
export default React.forwardRef(AboutPage);