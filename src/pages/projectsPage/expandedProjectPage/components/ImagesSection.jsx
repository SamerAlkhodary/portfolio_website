import { Typography } from '@mui/material';
import React, { useCallback }  from 'react';
import { useMediaQuery } from 'react-responsive';
import translate from '../../../../res/strings/strings';
import classes from './style.js';
import { useNavigate } from 'react-router-dom';


const ImageSection = ({project})=> {

	const navigate = useNavigate();
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});	
	const Image = React.memo(function Image({style, src,folder,id }) {
		return <img style={style} src={src} className="hero" onClick={()=>{
			navigate(`
				#f=${folder}&id=${id}`
			);
		}}/>;
	});
	
	const imagesStyle= isDesktopOrLaptop?{width:'32%',aspectRatio:1,objectFit: 'cover',	}:{width:'100%',aspectRatio:1,objectFit: 'cover',	};
	const beforeImages= useCallback(()=>{
		var images =[];
		for(let i=1; i<project.beforeImageCount;i++){
			images.push(<Image
				style={imagesStyle}
				src={`/assets/images/projects/${project.id}/before/${i}.webp`}
				key={i} 
				folder='before'
				id={i}  
			/>);
		}
		return images;

	},[project.beforeImageCount,isDesktopOrLaptop,imagesStyle]);
	const afterImages= useCallback(()=>{
		var images =[];
		for(let i=1; i<=project.afterImageCount;i++){
			images.push(<Image 
				style={imagesStyle} 
				src={`/assets/images/projects/${project.id}/after/${i}.webp`} 
				key={i}
				folder='after'
				id={i}  
			/>);
		}
		return images;
	},[project.afterImageCount,imagesStyle,isDesktopOrLaptop]);
	const progressImages=  useCallback(()=>{
		var images =[];
		for(let i=1; i<=project.progressImages;i++){
			images.push(<Image 
				style={imagesStyle} 
				src={`/assets/images/projects/${project.id}/progress/${i}.webp`} 
				key={i}  
				folder='progress'
				id={i}  
			/>);
		}
		return images;
	},[project.progressImages,isDesktopOrLaptop,imagesStyle]);
	return (
		<>
			{
				project.beforeImageCount!=0?(
					<>
						<Typography variant={'h5'}  fontFamily={'Merriweather'}  style={classes.title}>
							{translate('before')}
						</Typography>
						<div style={isDesktopOrLaptop? classes.imageListDesktop:classes.imageListMobile}>
							{
								beforeImages()
							}
						</div>
						<Typography variant={'h5'}  fontFamily={'Merriweather'}  style={classes.title}>
							{translate('after')}
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
