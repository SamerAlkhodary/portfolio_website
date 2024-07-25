import { Typography } from '@mui/material';
import React, { useCallback }  from 'react';
import { useMediaQuery } from 'react-responsive';
import translate from '../../../../res/strings/strings';
import classes from './style.js';
import { useAtom } from 'jotai';
import { showImageAtom } from '../../../../atoms/atoms.js';

const ImageSection = ({project})=> {
	const [,setShowImage] = useAtom(
		showImageAtom,
	);
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});	
	const Image = React.memo(function Image({style, src }) {
		return <img style={style} src={src} className="hero" onClick={()=>{setShowImage({visible:true,imgSrc:src});}}/>;
	});
	
	const imagesStyle= isDesktopOrLaptop?{width:'32%',aspectRatio:1}:{width:'100%',aspectRatio:1};
	const beforeImages= useCallback(()=>{
		var images =[];
		for(let i=1; i<project.beforeImageCount;i++){
			images.push(<Image style={imagesStyle} src={`/portfolio_website/assets/images/projects/${project.title}/b-${i}.webp`} key={i} />);
		}
		return images;

	},[project.beforeImageCount,isDesktopOrLaptop,imagesStyle]);
	const afterImages= useCallback(()=>{
		var images =[];
		for(let i=1; i<=project.afterImageCount;i++){
			images.push(<Image style={imagesStyle} src={`/portfolio_website/assets/images/projects/${project.title}/a-${i}.webp`} key={i}  />);
		}
		return images;
	},[project.afterImageCount,imagesStyle,isDesktopOrLaptop]);
	const progressImages=  useCallback(()=>{
		var images =[];
		for(let i=1; i<=project.progressImages;i++){
			images.push(<Image style={imagesStyle} src={`/portfolio_website/assets/images/projects/${project.title}/p-${i}.webp`} key={i}  />);
		}
		return images;
	},[project.progressImages,isDesktopOrLaptop,imagesStyle]);
	return (
		<>
			{
				project.beforeImageCount!=0?(
					<>
						<Typography variant={'h5'}  fontFamily={'Merriweather'}  style={classes.title}>
							{translate('Before:')}
						</Typography>
						<div style={isDesktopOrLaptop? classes.imageListDesktop:classes.imageListMobile}>
							{
								beforeImages()
							}
						</div>
						<Typography variant={'h5'}  fontFamily={'Merriweather'}  style={classes.title}>
							{translate('After:')}
						</Typography>
						<div style={isDesktopOrLaptop? classes.imageListDesktop:classes.imageListMobile}>
							{
								afterImages()
							}
						</div>
					</>
				):<div/>
			}
			{
				project.progressImages!=0?(
					<div style={isDesktopOrLaptop? classes.imageListDesktop:classes.imageListMobile}>
						{
							progressImages()
						}
					</div>
				):<div/>
			}
		</>
	);

};
export default ImageSection;
