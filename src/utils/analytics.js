import ReactGA from 'react-ga4';
import Cookies from 'js-cookie';

const useAnalytics = () => {
	const sendEvent = (event) => {
		const consent = Cookies.get('analytics-consent');
		if (consent === 'true') {
			ReactGA.event(event);
		}
	};

	return  sendEvent ;
};

export default useAnalytics;