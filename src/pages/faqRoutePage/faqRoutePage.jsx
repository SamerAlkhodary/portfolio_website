import React, { useEffect, useRef } from 'react';
import { CustomAppBar, Footer, Menu, StickyCallButton } from '../../components/index.js';
import CookieConsentModal from '../../components/cookieConsentModal/CookieConsentModal.jsx';
import FaqPage from '../faqPage/faqPage.jsx';

// Dedicated /faq route. Wraps the FAQ accordion with the standard page chrome.
const FaqRoutePage = ()=> {
	const nullRef = useRef(null);
	const footerRef = useRef(null);

	useEffect(()=>{ window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

	return (
		<>
			<CookieConsentModal/>
			<CustomAppBar refs={[]} heroRef={nullRef}/>
			<Menu customRefs={[]}/>
			<div style={{ minHeight: '100vh', paddingTop: '3em' }}>
				<FaqPage/>
			</div>
			<div ref={footerRef}>
				<Footer edge/>
			</div>
			<StickyCallButton hideRefs={[footerRef]}/>
		</>
	);
};

export default FaqRoutePage;
