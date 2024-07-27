import React from 'react';
import Typography from '@mui/material/Typography';
import classes from './style.js';
import hero from '../../res/images/hero2.webp';
import { Button } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import Consts from '../../consts.js';
import translate from '../../res/strings/strings.js';

const HeroPage = ({aboutRef},ref)=> {
	const Image = React.memo(function Image({ src }) {
		return <img style={classes.hero} src={src} className="hero" />;
	});
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div ref={ref} style={classes.container} >
			<Image src={hero} />
			<div style={isDesktopOrLaptop?classes.textsDesktop:classes.textsMobile}>
				<Typography variant={isDesktopOrLaptop?'h4':'h5'} paragraph fontFamily={'Merriweather'} style={classes.h1}>
					{translate('heroTextTitle')}
				</Typography>

				<Typography  variant={isDesktopOrLaptop?'h5':'h6'} paragraph style={classes.h2} fontFamily={'Merriweather'}>
					{translate('heroTextSubtitle')}
				</Typography>
				<Button onClick={()=>{aboutRef.current.scrollIntoView({ behavior: 'smooth',});}} variant='filled' style={classes.button}>
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
