import ReactGA from 'react-ga4';
import Cookies from 'js-cookie';
import Consts from '../consts';

const useAnalytics = () => {
	const sendEvent = (event) => {
		if(Consts.config.enableAnalytics===true){
			const consent = Cookies.get('analytics-consent');
			if (consent === 'true') {
				ReactGA.event(event);
			}
		}
	};

	return  sendEvent ;
};

export default useAnalytics;