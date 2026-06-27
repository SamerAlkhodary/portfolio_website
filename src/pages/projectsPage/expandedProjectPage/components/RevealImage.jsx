import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Typography } from '@mui/material';
import useTranslate from '../../../../res/strings/strings.js';
import classes from '../style.js';
import { areaImage } from '../projects.js';

// Honest before/after comparison of the SAME area. The finished ("after") shot
// is the base layer; the "before" shot is clipped in from the left up to the
// seam, so dragging the gold seam wipes between the two states.
// Both images come from the one `area` folder, so they cannot be mismatched.
//
// Perf: dragging writes clip-path/left STRAIGHT to the DOM, coalesced to one
// paint per animation frame, and never calls setState — so touch drags stay
// smooth on phones. React only re-renders when the keyboard moves the seam (for
// aria-valuenow). `clipPath`/`left` are intentionally left out of the inline
// style props so React never clobbers what we paint by hand.
const RevealImage = ({ projectId, area })=> {
	const translate = useTranslate();
	const figureRef = useRef(null);
	const clipRef = useRef(null);
	const seamRef = useRef(null);
	const posRef = useRef(50);
	const pendingRef = useRef(50);
	const frameRef = useRef(0);
	const [ariaPos, setAriaPos] = useState(50);

	const src = (slot)=> areaImage(projectId, area, slot);

	const paint = useCallback((pct)=>{
		posRef.current = pct;
		if (clipRef.current) clipRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
		if (seamRef.current) seamRef.current.style.left = `${pct}%`;
	}, []);

	// Set the starting 50/50 split before paint so there's no flash.
	useLayoutEffect(()=>{ paint(50); }, [paint]);

	const scheduleFromClientX = useCallback((clientX)=>{
		const rect = figureRef.current?.getBoundingClientRect();
		if(!rect) return;
		pendingRef.current = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
		if (frameRef.current) return; // already a paint queued for this frame
		frameRef.current = requestAnimationFrame(()=>{
			frameRef.current = 0;
			paint(pendingRef.current);
		});
	}, [paint]);

	const onPointerDown = (e)=>{
		e.currentTarget.setPointerCapture(e.pointerId);
		figureRef.current?.classList.add('dragging');
		scheduleFromClientX(e.clientX);
	};
	const onPointerMove = (e)=>{
		if(e.buttons !== 1) return;
		scheduleFromClientX(e.clientX);
	};
	const endDrag = ()=>{
		figureRef.current?.classList.remove('dragging');
		setAriaPos(Math.round(posRef.current)); // sync aria once, after the gesture
	};
	const onKeyDown = (e)=>{
		if(e.key === 'ArrowLeft'){ e.preventDefault(); const p = Math.max(0, posRef.current - 5); paint(p); setAriaPos(Math.round(p)); }
		if(e.key === 'ArrowRight'){ e.preventDefault(); const p = Math.min(100, posRef.current + 5); paint(p); setAriaPos(Math.round(p)); }
	};

	useEffect(()=> ()=>{ if (frameRef.current) cancelAnimationFrame(frameRef.current); }, []);

	return (
		<div
			ref={figureRef}
			className='reveal-figure'
			style={classes.revealFigure}
			role='slider'
			tabIndex={0}
			aria-label={translate('beforeAfterTitle')}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={ariaPos}
			onKeyDown={onKeyDown}
			onPointerDown={onPointerDown}
			onPointerMove={onPointerMove}
			onPointerUp={endDrag}
			onPointerCancel={endDrag}>

			{/* base: the finished result */}
			<img src={src('after')} alt={translate('baAfter')} style={classes.revealImg} draggable={false}/>

			{/* overlay: the original state, clipped to the seam (clipPath set via paint) */}
			<div ref={clipRef} className='reveal-clip' style={classes.revealClip}>
				<img src={src('before')} alt={translate('baBefore')} style={classes.revealImg} draggable={false}/>
			</div>

			<Typography style={{ ...classes.revealTab, left: '0.7em' }} component='span'>
				{translate('baBefore')}
			</Typography>
			<Typography style={{ ...classes.revealTab, right: '0.7em' }} component='span'>
				{translate('baAfter')}
			</Typography>

			{/* seam + knob (left set via paint) */}
			<div ref={seamRef} className='reveal-seam' style={classes.revealSeam}>
				<div style={classes.revealKnob}>‹›</div>
			</div>
		</div>
	);
};

export default RevealImage;
