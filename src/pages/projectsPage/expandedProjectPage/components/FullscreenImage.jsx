import React, { useEffect } from 'react';

import { animated } from 'react-spring';
import {  useSpring } from '@react-spring/web';
import { useAtom } from 'jotai';
import { showImageAtom } from '../../../../atoms';
import Consts from '../../../../consts';
import classes from './style.js';
import { useMediaQuery } from 'react-responsive';

import CloseIcon from '@mui/icons-material/Close';
// eslint-disable-next-line react/prop-types
function FullScreenImage() {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});	
	const [showImage,setShowImage] = useAtom(
		showImageAtom,
	);
	const Image = React.memo(function Image({style, src }) {
		return <img style={style} src={src} className="hero" onClick={()=>{console.log('hi');}}/>;
	});

	useEffect(() => {
		if (showImage.visible) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		// Cleanup on component unmount
		return () => {
			document.body.style.overflow = 'auto';

		};
	}, [showImage.visible]);

	const fadeInProps = useSpring({
		position: 'fixed',
		pointerEvents:'auto',
		display: 'flex',
		zIndex:999,
		backgroundColor: Consts.theme.secondaryOpacity,
		top: 0,
		left: 0,
		right: 0,
		justifyContent:'center',
		bottom: 0,
		opacity: showImage.visible ? 1 : 0,
		transform: showImage.visible ? 'translateX(0%)' : 'translateX(100%)',
		config: { tension: 280, friction: 60 },
	});
	const imagesStyle= isDesktopOrLaptop?{width:'50%',aspectRatio:1}:{width:'100%',aspectRatio:1};


	
	return (
		<animated.div style={fadeInProps}>
			<Image src={showImage.imgSrc} style={imagesStyle}/>
			<div style={isDesktopOrLaptop?classes.closeIconDiv:classes.closeIconDivMobile} onClick={()=>{setShowImage({visible:false,imgSrc:''});}}>
				<CloseIcon sx={{fontSize: 30,color:'white',alignSelf:'center',backgroundColor:Consts.theme.secondaryOpacity,borderRadius:'2em'}} />
			</div>
			
		</animated.div>
	);
}
export default FullScreenImage;
