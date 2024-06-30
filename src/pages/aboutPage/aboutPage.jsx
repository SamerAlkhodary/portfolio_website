import React from 'react';
import  Typography  from '@mui/material/Typography';
import useStyles from './style.js';
import { useMediaQuery } from 'react-responsive';
import translate from '../../res/strings/strings.js';


const AboutPage =(props,ref)=> {

	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	const classes = useStyles();

	return (
		<div ref={ref} className={classes.page} >
			<div className={classes.mainContainer}>
				<Typography className={classes.title} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
					{translate('about')}
				</Typography>
				<div className={classes.padding} />

				<div className={isDesktopOrLaptop?classes.aboutContainerDesktop:classes.aboutContainerMobile} >
				
					<div className={isDesktopOrLaptop?classes.textsDesktop:classes.textsMobile}>
				
						<Typography fontFamily={'Merriweather'} variant="h7">
							{translate('aboutText')}
						</Typography>
				
						
				
					</div>
				</div>
			</div>
		</div>

	);
};
export default React.forwardRef(AboutPage);