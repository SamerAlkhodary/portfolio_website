import React from 'react';
import  Typography  from '@mui/material/Typography';
import classes from './style.js';
import { useMediaQuery } from 'react-responsive';
import translate from '../../res/strings/strings.js';

const AboutPage =(props,ref)=> {

	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
 
	return (
		<div ref={ref} style={classes.page} >
			<div style={classes.mainContainer}>
				<Typography style={classes.title} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
					{translate('about')}
				</Typography>
				<div style={classes.padding} />

				<div style={isDesktopOrLaptop?classes.aboutContainerDesktop:classes.aboutContainerMobile} >
				
					<div style={isDesktopOrLaptop?classes.textsDesktop:classes.textsMobile}>
				
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