import ReactGA from 'react-ga4';
import Cookies from 'js-cookie';
import Consts from '../consts';

const CONSENT_COOKIE = 'analytics-consent';

// Reads + parses the consent cookie. If the stored value isn't valid JSON (e.g.
// a legacy "[object Object]" written by the js-cookie 3 regression), drop it so
// the banner re-appears and a clean value is stored next time.
const readConsent = () => {
	const raw = Cookies.get(CONSENT_COOKIE);
	if (raw === undefined) return undefined;
	try {
		return JSON.parse(raw);
	} catch (e) {
		Cookies.remove(CONSENT_COOKIE);
		return undefined;
	}
};

const useAnalytics = () => {
	const sendEvent = (event) => {
		if (Consts.config.enableAnalytics === true && readConsent()?.analytics === true) {
			ReactGA.event(event);
		}
		return undefined;
	};
	const clearTracking=()=>{
		ReactGA.reset();
		Cookies.remove('_ga');
		Cookies.remove('_ga_JKWK78TVMF');
	};

	const enableTracking=()=>{
		const TRACKING_ID = 'G-JKWK78TVMF';
		ReactGA.initialize(TRACKING_ID);
	};
	const getConsentObject = ()=>{
		if(Consts.config.enableAnalytics===true){
			return readConsent();
		}
		return undefined;
	};
	return  {sendEvent,getConsentObject,enableTracking,clearTracking} ;
};

export default useAnalytics;