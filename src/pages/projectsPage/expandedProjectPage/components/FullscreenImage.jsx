import React, { useEffect } from 'react';

import { animated } from 'react-spring';
import {  useSpring } from '@react-spring/web';
import { useAtom } from 'jotai';
import { showImageAtom } from '../../../../atoms';
import Consts from '../../../../consts';
import classes from './style.js';
import CloseIcon from '@mui/icons-material/Close';
// eslint-disable-next-line react/prop-types
function FullScreenImage() {

	const [showImage,setShowImage] = useAtom(
		showImageAtom,
	);
	const Image = React.memo(function Image({style, src }) {
		return <img style={style} src={src} className="hero" onClick={()=>{console.log('hi');}} />;
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
		backgroundColor: Consts.theme.secondary,
		top: 0,
		left: 0,
		right: 0,
		bottom:0,
		opacity: showImage.visible ? 1 : 0,
		transform: showImage.visible ? 'translateX(0%)' : 'translateX(100%)',
		config: { tension: 280, friction: 60 },
	});
	const imagesStyle={width:'100%',aspectRatio:1,objectFit:'contain'};


	
	return (
		<animated.div style={fadeInProps}>
			<Image src={showImage.imgSrc} style={imagesStyle}/>
			<div style={classes.closeIconDiv} onClick={()=>{setShowImage({visible:false});}}>
				<CloseIcon sx={{fontSize: 30,color:'white',alignSelf:'center',backgroundColor:Consts.theme.secondary,borderRadius:'2em'}} />
			</div>
			
		</animated.div>
	);
}
export default FullScreenImage;
