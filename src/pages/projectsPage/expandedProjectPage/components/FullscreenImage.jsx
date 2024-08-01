import React, { useEffect } from 'react';

import { animated } from 'react-spring';
import {  useSpring } from '@react-spring/web';
import { useAtom } from 'jotai';
import { showImageAtom } from '../../../../atoms';
import Consts from '../../../../consts';
import classes from './style.js';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useParams } from 'react-router-dom';

const getHashVariables= (url)=> {
	const hash = url.substring(1); // Remove the leading '#'
	const vars = hash.split('&');
	const hashVars = {};
	vars.forEach((v) => {
		const [key, value] = v.split('=');
		hashVars[key] = value;
	});
	return hashVars;
};
// eslint-disable-next-line react/prop-types
function FullScreenImage() {
	const navigate = useNavigate();

	const [showImage,setShowImage] = useAtom(
		showImageAtom,
	);
	const Image = React.memo(function Image({style, src }) {
		return <img style={style} src={src} className="hero" />;
	});
	const params = useParams();
	useEffect(() => {
		// execute on location change
		const vars= getHashVariables(location.hash);
		if (vars['f']!== undefined && vars['id']!==undefined ){
			setShowImage({visible:true,imgSrc:`/assets/images/projects/${params.id}/${vars['f']}/${vars['id']}.webp`});
		}else{
			setShowImage({ visible: false, imgSrc: '' });
		}
	}, [location.hash,params.id]);
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
		zIndex:800,
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
			<div style={classes.closeIconDiv} onClick={()=>
			{setShowImage({visible:false});
				navigate(-1);
			}}>
				<CloseIcon sx={{fontSize: 30,color:'white',alignSelf:'center',backgroundColor:Consts.theme.secondary,borderRadius:'2em'}} />
			</div>
			
		</animated.div>
	);
}
export default FullScreenImage;
