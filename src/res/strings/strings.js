import { useAtom } from 'jotai';
import { languageAtom } from '../../atoms';

const Strings={
	'en-US':{
		about: 'About',
		services: 'Services',
		contact: 'Contact',
		construction: 'Residential and non-residential building construction',
		renovation: 'Apartment renovation',
		houseConstruction: 'Family house construction',
		consultation: 'Technical consultation',
		contactPageTitle: 'Contact us',
		learnMore: 'Learn more',
		send: 'Send',
		consultationDescription: 'Expert advice at every stage of construction, Technical inspection and Responsible technical management',
		constructionDescription: 'Comprehensive service from planning to implementation, including office buildings and shops.',
		renovationDescription: 'Complete apartment renovation projects, including interior design work.',
		houseConstructionDescription: 'Custom and turnkey family house construction.',
		heroTextTitle: 'We bring your vision to life',
		heroTextSubtitle: 'General contracting from design to handover',
		aboutText: 'Palmyra-Építő Kft. was founded in Budapest, and we are dedicated to providing the highest quality construction services to our clients. Our mission is to make your dreams come true, whether it\'s house building or apartment renovation, and our vision is to become a key player in the Hungarian construction industry, continuously providing innovative and sustainable solutions to our clients.',
		yourName: 'Your name',
		yourEmail: 'Your email address',
		message: 'Message',
		locale:'EN/HU',
		projectNotFound: 'Project not found!',
		restaurant: 'Restaurant',
		apartments: 'Apartments',
		projectsInfo:{
			midoName: 'Mido restaurant',
			midoDescription: 'Transforce apartments and houses, ensuring customer satisfaction and timely completion. From major overhauls to minor upgrades.',
			midoType:'Restaurant',
			barbershopName: 'Barbershop',
			barbershopDescription: 'premier general contractor, we enhance apartments and houses, ensuring customer satisfaction and timely completion. From major.',
			barbershopType:'Barbershop',

		},
		
	},
	'hu-HU': {
		about: 'Rólunk',
		restaurant: 'Étterem',
		apartments: 'Lakások',
		projects: 'Projektek',
		services: 'Szolgáltatások',
		barbershop: 'Barbershop',
		contact: 'Kapcsolat',
		construction: 'Lakó- és nem lakó Epület építése',
		renovation: 'Lakásfelújítás',
		houseConstruction: 'Családiház építés',
		consultation:'Műszaki tanácsadás',
		contactPageTitle: 'Lépjen kapcsolatba velünk',
		learnMore: 'Tudjon meg többet',
		send: 'Küldés',
		consultationDescription: 'Szakértői tanácsadás az építkezés minden fázisában,Műszaki ellenőrzés és Felelős műszaki vezetés',
		constructionDescription: 'Teljes körű szolgáltatás a tervezéstől a kivitelezésig, beleértve irodaházakat, üzleteket is.',
		renovationDescription: 'Teljes lakásfelújítási projektek, beleértve a belsőépítészeti munkákat is.',
		houseConstructionDescription: 'Building custom family houses, fully finished and ready for you to move in.',
		heroTextTitle: 'Ötleteit megvalósítjuk',
		heroTextSubtitle: 'Generál kivitelezés tervezéstől kulcsátadásig',
		aboutText: 'A Palmyra-Építő Kft. Budapesten alakult, és elkötelezetten dolgozunk azon, hogy a legjobb minőségű építőipari szolgáltatásokat nyújtsuk ügyfeleinknek. Küldetésünk, hogy álmait valóra váltsuk, legyen szó házépítésről vagy lakásfelújításról, és víziónk, hogy a magyar építőipar meghatározó szereplőjévé váljunk, folyamatosan innovatív és fenntartható megoldásokkal szolgálva ügyfeleinket.',
		yourName: 'Az ön neve',
		yourEmail: 'Az ön email címe',
		message: 'Üzenet',
		locale:'EN/HU',
		projectNotFound: 'A projekt nem található!',
		projectsInfo:{
			midoName: 'Mido etterem',
			midoDescription: 'Új epítés esetén fővállalkozóként tudunk tevékenykedni. Saját földmunkarészlegünk van.',
			midoType:'Étterem',
			barbershopName: 'Barbershop',
			barbershopDescription: 'Új epítés esetén fővállalkozóként tudunk tevékenykedni. Saját földmunkarészlegünk van.',
			barbershopType:'Barbershop',
		}
	}
};
Object.freeze(Strings);
function translate(value,section){
	const [language,] = useAtom(languageAtom);
	const result = section? Strings[language][section][value]:  Strings[language][value];
	return result??value;
}
export default translate;