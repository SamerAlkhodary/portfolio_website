import React from 'react';
import Typography from '@mui/material/Typography';
import classes from './style.js';
import { Button } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import Consts from '../../consts.js';
import translate from '../../res/strings/strings.js';
import useAnalytics from '../../utils/analytics.js';

const HeroPage = ({aboutRef},ref)=> {
	const Image = React.memo(function Image({ src }) {
		return <img style={classes.hero} src={src} className="hero" />;
	});
	const {sendEvent} = useAnalytics();

	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div ref={ref} style={classes.container} >
			<Image src={'/assets/images/hero2.webp'} />
			<div style={isDesktopOrLaptop?classes.textsDesktop:classes.textsMobile}>
				<Typography variant={isDesktopOrLaptop?'h4':'h5'} paragraph fontFamily={'Merriweather'} style={classes.h1}>
					{translate('heroTextTitle')}
				</Typography>

				<Typography  variant={isDesktopOrLaptop?'h5':'h6'} paragraph style={classes.h2} fontFamily={'Merriweather'}>
					{translate('heroTextSubtitle')}
				</Typography>
				<Button onClick={()=>{
					sendEvent({
						category: 'hero',
						action: 'click',
						label: 'learn more',
					});
					aboutRef.current.scrollIntoView({ behavior: 'smooth',});}
				} variant='filled' style={classes.button}>
					<Typography 
						fontFamily={'Merriweather'} 
						color= {Consts.theme.secondary}
						fontSize={'1em'}
						fontWeight={'bold'}>
						{translate('learnMore')}

					</Typography>
				</Button>

				
			</div>
			
		</div>
     

	);
};
export default React.forwardRef(HeroPage);
