import ReactGA from 'react-ga4';
import Cookies from 'js-cookie';
import Consts from '../consts';

const useAnalytics = () => {
	const sendEvent = (event) => {
		if(Consts.config.enableAnalytics===true){
			const consent = Cookies.get('analytics-consent');
			try{
				const consentObject =JSON.parse(consent);
				if (consentObject?.analytics === true) {
					ReactGA.event(event);
				}
			}catch(e){
				return undefined;
			}
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
			try{
				const consent = Cookies.get('analytics-consent');
				const consentObject =JSON.parse(consent);
				return consentObject;
			}catch(e){
				return undefined;
			}
		}
		return undefined;
	};
	return  {sendEvent,getConsentObject,enableTracking,clearTracking} ;
};

export default useAnalytics;