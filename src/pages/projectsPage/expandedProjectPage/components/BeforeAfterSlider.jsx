import React, { useCallback, useRef, useState } from 'react';
import { Typography } from '@mui/material';
import useTranslate from '../../../../res/strings/strings.js';
import classes from './style.js';

// Interactive before/after comparison: the "after" image is the base layer and
// the "before" image is revealed up to the handle position via clip-path, so it
// resizes naturally without measuring pixel widths.
const BeforeAfterSlider = ({ beforeSrc, afterSrc })=> {
	const translate = useTranslate();
	const containerRef = useRef(null);
	const [pos, setPos] = useState(50);

	const setFromClientX = useCallback((clientX)=>{
		const rect = containerRef.current?.getBoundingClientRect();
		if(!rect) return;
		const pct = ((clientX - rect.left) / rect.width) * 100;
		setPos(Math.min(100, Math.max(0, pct)));
	},[]);

	const onPointerDown = (e)=>{
		e.currentTarget.setPointerCapture(e.pointerId);
		setFromClientX(e.clientX);
	};
	const onPointerMove = (e)=>{
		if(e.buttons !== 1) return;
		setFromClientX(e.clientX);
	};
	const onKeyDown = (e)=>{
		if(e.key === 'ArrowLeft'){ e.preventDefault(); setPos(p=>Math.max(0, p-5)); }
		if(e.key === 'ArrowRight'){ e.preventDefault(); setPos(p=>Math.min(100, p+5)); }
	};

	return (
		<div
			ref={containerRef}
			style={classes.baContainer}
			onPointerDown={onPointerDown}
			onPointerMove={onPointerMove}>
			<img src={afterSrc} alt={translate('baAfter')} style={classes.baImg} draggable={false}/>
			<div style={{...classes.baBefore, clipPath:`inset(0 ${100-pos}% 0 0)`}}>
				<img src={beforeSrc} alt={translate('baBefore')} style={classes.baImg} draggable={false}/>
			</div>
			<Typography style={{...classes.baTag, left:'0.75em'}} fontFamily={'Merriweather'} variant='body2'>
				{translate('baBefore')}
			</Typography>
			<Typography style={{...classes.baTag, right:'0.75em'}} fontFamily={'Merriweather'} variant='body2'>
				{translate('baAfter')}
			</Typography>
			<div
				style={{...classes.baHandle, left:`${pos}%`}}
				role='slider'
				tabIndex={0}
				aria-label={translate('beforeAfterTitle')}
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={Math.round(pos)}
				onKeyDown={onKeyDown}>
				<div style={classes.baHandleKnob}>‹ ›</div>
			</div>
		</div>
	);
};
export default BeforeAfterSlider;
