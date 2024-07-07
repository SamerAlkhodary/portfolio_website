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
		barbershop: 'Barbershop',
		projects: 'Projects',
		constructionDescription:'For new construction, we can act as the main contractor. We have our own ground-works division that handles all excavation and construction work. We build everything from brand new houses and other properties to docks and port facilities.',
		renovationDescription:'we renovate every room in the house. We are certified for wet rooms, enabling us to perform various types of bathroom renovations (tiling, laying tile floors) as well as kitchen renovations.',
		extensionDescription:'Planning an extension? We help you with all types of additions. Hire us if you need this service for a sunroom, veranda, garage, bathroom, etc. We handle almost everything and offer a complete, hassle-free solution.',
		heroTextTitle: 'Bring your vision to life',
		heroTextSubtitle: 'Construction and renovation services to give you the home you deserve',
		aboutText: 'Transform your living spaces with our expert renovation services! As a premier general contractor, we enhance apartments and houses, ensuring customer satisfaction and timely completion. From major overhauls to minor upgrades, our comprehensive construction services are tailored to meet your needs.',
		yourName: 'Your name',
		yourEmail: 'Your email address',
		message: 'Message',
		locale:'EN/HU',
		restaurant: 'Restaurant',
		apartments: 'Apartments',
	},
	'hu-HU': {
		about: 'Rólunk',
		restaurant: 'Étterem',
		apartments: 'Lakások',
		projects: 'Projektek',
		services: 'Szolgáltatások',
		barbershop: 'Barbershop',
		contact: 'Kapcsolat',
		construction: 'Építés',
		renovation: 'Felújítás',
		extension: 'Bővítés',
		contactPageTitle: 'Lépjen kapcsolatba velünk',
		learnMore: 'Tudjon meg többet',
		send: 'Küldés',
		constructionDescription: 'Új építés esetén fővállalkozóként tudunk tevékenykedni. Saját földmunkarészlegünk van, amely az összes földmunkát és építési munkát végzi. Mindent építünk az új házaktól és egyéb ingatlanoktól a dokkokig és kikötői létesítményekig.',
		renovationDescription: 'Minden helyiséget felújítunk a házban. Tanúsítvánnyal rendelkezünk nedves helyiségekhez, így különféle fürdőszoba-felújításokat (csempézés, járólapozás) és konyhai felújításokat is végezhetünk.',
		extensionDescription: 'Tervez bővítést? Minden típusú bővítményben segítünk. Béreljen fel minket, ha napozószobához, verandához, garázshoz, fürdőszobához stb. van szüksége erre a szolgáltatásra. Szinte mindent elintézünk, és teljes, problémamentes megoldást kínálunk.',
		heroTextTitle: 'Keltsük életre az elképzeléseit',
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