// FAQ content.
//
// TO ADD A QUESTION: append one object to the array below. Both languages live
// together, so there's no second file to touch and no count to bump in the
// component. The FAQ page renders whatever is here, in order.
//
// Guidelines: keep answers to 1-3 sentences. Mark any company-specific fact you
// can't state yet as `[owner to confirm: ...]` and fill it before going live.
// For writing new entries, the `contractor-expert` skill drafts the substance and
// the `copywriter` skill makes the hu-HU (formal Ön) / en-US wording native.
//
// Locale keys are 'en-US' and 'hu-HU' (matching languageAtom).
const faq = [
	{
		q: {
			'en-US': 'How do you price a project?',
			'hu-HU': 'Hogyan áraznak egy projektet?',
		},
		a: {
			'en-US': 'We give a fixed written price after a site visit. It depends on scope, finishes, and the building\'s condition, so we don\'t price blind from a form. [owner to confirm: the quote is free and itemised]',
			'hu-HU': 'Helyszíni felmérés után írásos, fix árat adunk. Ez a munka terjedelmétől, a befejezéstől és az épület állapotától függ, ezért nem árazunk vakon, űrlapból. [tulajdonos megerősítése: az ajánlat ingyenes és tételes]',
		},
	},
	{
		q: {
			'en-US': 'What is included in the price?',
			'hu-HU': 'Mit tartalmaz az ár?',
		},
		a: {
			'en-US': 'The written quote is itemised, so you see exactly what you pay for. [owner to confirm: materials, labour, waste removal, and final cleaning], with ÁFA shown separately.',
			'hu-HU': 'Az írásos ajánlat tételes, így pontosan látja, miért fizet. [tulajdonos megerősítése: anyag, munkadíj, sittszállítás és végső takarítás], az ÁFA külön feltüntetve.',
		},
	},
	{
		q: {
			'en-US': 'What if the cost changes during the build?',
			'hu-HU': 'Mi van, ha a költség változik a munka során?',
		},
		a: {
			'en-US': 'Any extra work is agreed and priced with you before we carry it out, never added quietly at the end.',
			'hu-HU': 'Minden pótmunkát előre egyeztetünk és árazunk Önnel, mielőtt elvégeznénk; soha nem a végén, csendben hozzáadva.',
		},
	},
	{
		q: {
			'en-US': 'Do you handle permits and paperwork?',
			'hu-HU': 'Intézik az engedélyeket és a papírmunkát?',
		},
		a: {
			'en-US': 'We tell you up front what your project needs. Many interior renovations need no permit; new builds and structural or facade work do. [owner to confirm: we handle the permit and provide the responsible technical leader where required]',
			'hu-HU': 'Előre megmondjuk, mire van szüksége a projektnek. Sok belső felújításhoz nem kell engedély; új építéshez, szerkezeti vagy homlokzati munkához igen. [tulajdonos megerősítése: intézzük az engedélyt, és biztosítjuk a felelős műszaki vezetőt, ahol szükséges]',
		},
	},
	{
		q: {
			'en-US': 'Do you give a guarantee on the work?',
			'hu-HU': 'Vállalnak garanciát a munkára?',
		},
		a: {
			'en-US': 'Yes. [owner to confirm: warranty length], on top of the statutory warranty you are entitled to. We stand behind the work after handover.',
			'hu-HU': 'Igen. [tulajdonos megerősítése: a jótállás időtartama], a törvényes szavatosságon felül. A munkáért az átadás után is helytállunk.',
		},
	},
	{
		q: {
			'en-US': 'Do you work outside Budapest?',
			'hu-HU': 'Budapesten kívül is dolgoznak?',
		},
		a: {
			'en-US': '[owner to confirm: Budapest and the surrounding towns, such as Dunakeszi]. Tell us your location and we will let you know.',
			'hu-HU': '[tulajdonos megerősítése: Budapest és a környező települések, például Dunakeszi]. Mondja el a helyszínt, és visszajelzünk.',
		},
	},
];

export default faq;
