import React from 'react';
import  Typography  from '@mui/material/Typography';
import useStyles from './style.js';
import profile from '../../res/profile.jpg';
import { useMediaQuery } from 'react-responsive';


const AboutPage =(props,ref)=> {

	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	const classes = useStyles();

	return (
		<div ref={ref} className={classes.page}>
			<div className={classes.mainContainer}>
				<Typography className={classes.title} variant='h4' fontFamily={'Merriweather'} fontWeight='bold'>
				Profile
				</Typography>
				<div className={isDesktopOrLaptop?classes.aboutContainerDesktop:classes.aboutContainerMobile} >
					<div className={classes.profileBg}>
						<img className={classes.profileImg} src={profile} alt="profile" />
					</div>
	
					<div className={isDesktopOrLaptop?classes.textsDesktop:classes.textsMobile}>
				
						<Typography fontFamily={'Merriweather'} fontWeight={'bold'} variant="h5">
							{'Hello, I am Samer Alkhodary, and I am a Software Engineer.'}
						</Typography>
						<div className={classes.padding} />
				
						<Typography fontFamily={'Merriweather'} variant="h6">
				
					I have a master&apos;s degree in Computer Engineering from Lund University. In my master&apos;s thesis I studied the impact of the BFF design pattern in a microservices environment, and this the <a style={{color:'#a87267'}}href="https://fileadmin.cs.lth.se/cs/Education/Examensarbete/Popsci/220608_09Alkhodary.pdf"> popular summary</a> .
						</Typography>
				
					</div>
				</div>
			</div>
		</div>

	);
};
export default React.forwardRef(AboutPage);