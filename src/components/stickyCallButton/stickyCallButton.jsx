import React, { useEffect, useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import { useMediaQuery } from 'react-responsive';
import Consts from '../../consts.js';
import info from '../../res/strings/info.js';
import useTranslate from '../../res/strings/strings.js';
import useAnalytics from '../../utils/analytics.js';
import classes from './style.js';

// Floating call button for mobile. Given `hideRefs` (contact section, footer,
// or an on-page contact CTA), it disappears while any of them is on screen so it
// doesn't duplicate the contact options sitting right there.
const StickyCallButton = ({ hideRefs = [] })=> {
	const translate = useTranslate();
	const { sendEvent } = useAnalytics();
	const isMobile = useMediaQuery({ query: '(max-width: 899px)' });
	const [nearContact, setNearContact] = useState(false);

	useEffect(()=>{
		const els = hideRefs.map(r => r?.current).filter(Boolean);
		if(els.length === 0) return;
		const visible = new Set();
		const observer = new IntersectionObserver(
			(entries)=>{
				entries.forEach(e => e.isIntersecting ? visible.add(e.target) : visible.delete(e.target));
				setNearContact(visible.size > 0);
			},
			{ rootMargin: '0px 0px -15% 0px' }
		);
		els.forEach(el => observer.observe(el));
		return ()=> observer.disconnect();
	}, [hideRefs]);

	if(!isMobile || nearContact) return null;

	return (
		<button
			type='button'
			style={classes.fab}
			aria-label={`${translate('callUs')}: ${info.number}`}
			onClick={()=>{
				sendEvent({ category: 'cta', action: 'click', label: 'sticky_call' });
				window.open(`tel:${info.number}`);
			}}>
			<PhoneIcon sx={{ fontSize: 26, color: Consts.theme.secondary }}/>
		</button>
	);
};
export default StickyCallButton;
