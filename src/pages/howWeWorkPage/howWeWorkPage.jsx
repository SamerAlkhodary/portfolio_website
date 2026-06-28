import React, { useEffect, useRef } from 'react';
import { CustomAppBar, Footer, Menu, StickyCallButton } from '../../components/index.js';
import CookieConsentModal from '../../components/cookieConsentModal/CookieConsentModal.jsx';
import PricingPage from '../pricingPage/pricingPage.jsx';

// Dedicated /how-we-work route. Wraps the "How we price" content block with the
// standard page chrome (app bar, menu, footer).
const HowWeWorkPage = ()=> {
	const nullRef = useRef(null);
	const footerRef = useRef(null);

	useEffect(()=>{ window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

	return (
		<>
			<CookieConsentModal/>
			<CustomAppBar refs={[]} heroRef={nullRef}/>
			<Menu customRefs={[]}/>
			<div style={{ minHeight: '100vh', paddingTop: '3em' }}>
				<PricingPage/>
			</div>
			<div ref={footerRef}>
				<Footer edge/>
			</div>
			<StickyCallButton hideRefs={[footerRef]}/>
		</>
	);
};

export default HowWeWorkPage;
