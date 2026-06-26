import React, { useEffect, useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import { useMediaQuery } from 'react-responsive';
import Consts from '../../consts.js';
import info from '../../res/strings/info.js';
import useTranslate from '../../res/strings/strings.js';
import useAnalytics from '../../utils/analytics.js';
import classes from './style.js';

// Floating call button for mobile. When `hideRef` is given (the contact section),
// it disappears while that section is on screen so it doesn't duplicate the
// contact CTAs sitting right there.
const StickyCallButton = ({ hideRef })=> {
	const translate = useTranslate();
	const { sendEvent } = useAnalytics();
	const isMobile = useMediaQuery({ query: '(max-width: 899px)' });
	const [nearContact, setNearContact] = useState(false);

	useEffect(()=>{
		const el = hideRef?.current;
		if(!el) return;
		const observer = new IntersectionObserver(
			([entry]) => setNearContact(entry.isIntersecting),
			{ rootMargin: '0px 0px -15% 0px' }
		);
		observer.observe(el);
		return ()=> observer.disconnect();
	}, [hideRef]);

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
