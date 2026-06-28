import React, { useEffect, useRef } from 'react';
import { CustomAppBar, Footer, Menu, StickyCallButton } from '../../components/index.js';
import CookieConsentModal from '../../components/cookieConsentModal/CookieConsentModal.jsx';
import { ServiceProcess } from '../servicesPage/components/index.js';
import PricingPage from '../pricingPage/pricingPage.jsx';

// Dedicated /how-we-work route: the process (how every project works) followed by
// how we price. Both "how we work" topics live here, not split across pages.
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
				<ServiceProcess/>
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
