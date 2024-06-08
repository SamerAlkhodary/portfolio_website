import React from 'react';
import  Typography  from '@mui/material/Typography';
import useStyles from './style.js';
import { useMediaQuery } from 'react-responsive';


const AboutPage =(props,ref)=> {

	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	const classes = useStyles();

	return (
		<div ref={ref} className={classes.page} >
			<div className={classes.mainContainer}>
				<Typography className={classes.title} variant='h4' fontFamily={'Merriweather'} fontWeight='bold'>
				About
				</Typography>
				<div className={classes.padding} />

				<div className={isDesktopOrLaptop?classes.aboutContainerDesktop:classes.aboutContainerMobile} >
				
					<div className={isDesktopOrLaptop?classes.textsDesktop:classes.textsMobile}>
				
						<Typography fontFamily={'Merriweather'} variant="h7">
							{'Transform your living spaces with our expert renovation services! As a premier general contractor, we enhance apartments and houses, ensuring customer satisfaction and timely completion. From major overhauls to minor upgrades, our comprehensive construction services are tailored to meet your needs.'}
						</Typography>
				
						
				
					</div>
				</div>
			</div>
		</div>

	);
};
export default React.forwardRef(AboutPage);