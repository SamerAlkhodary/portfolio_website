import { useAtom } from 'jotai';
import { languageAtom } from '../../atoms';

const Strings={
	'en-US':{
		about: 'About',
		services: 'Services',
		contact: 'Contact',
		construction: 'Construction',
		renovation: 'Renovation',
		extension: 'Extension',
		contactPageTitle: 'Get in touch',
		learnMore: 'Learn more',
		send: 'Send',
		heroTextTitle: 'We build your home, you fill them with memories',
		heroTextSubtitle: 'Construction and renovation services to give you the home you deserve',
		aboutText: 'Transform your living spaces with our expert renovation services! As a premier general contractor, we enhance apartments and houses, ensuring customer satisfaction and timely completion. From major overhauls to minor upgrades, our comprehensive construction services are tailored to meet your needs.',
		yourName: 'Your name',
		yourEmail: 'Your email address',
		message: 'Message',
		locale:'EN/HU'
	},
	'hu-HU': {
		about: 'Rólunk',
		services: 'Szolgáltatások',
		contact: 'Kapcsolat',
		construction: 'Építés',
		renovation: 'Felújítás',
		extension: 'Bővítés',
		contactPageTitle: 'Lépjen kapcsolatba velünk',
		learnMore: 'Tudjon meg többet',
		send: 'Küldés',
		heroTextTitle: 'Mi megépítjük az otthonát, ön emlékekkel tölti meg',
		heroTextSubtitle: 'Építési és felújítási szolgáltatások, hogy megadjuk az otthont, amit megérdemel',
		aboutText: 'Alakítsa át élettereit szakértő felújítási szolgáltatásainkkal! Mint első osztályú fővállalkozó, lakások és házak felújítását végezzük, biztosítva a vevői elégedettséget és a határidők betartását. A nagyobb átalakításoktól a kisebb frissítésekig, átfogó építési szolgáltatásainkat az ön igényeihez igazítjuk.',
		yourName: 'Az ön neve',
		yourEmail: 'Az ön email címe',
		message: 'Üzenet',
		locale:'EN/HU'

	}
};
Object.freeze(Strings);
function translate(value){
	const [language,] = useAtom(languageAtom);
	return Strings[language][value];
}
export default translate;