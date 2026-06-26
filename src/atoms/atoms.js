import {atom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';
const showMenuAtom = atom(false);
const showImageAtom = atom({visible:false,imgSrc:''});

// Persisted so the chosen language survives reloads and applies on pages
// without a language switcher (e.g. the 404 / project-not-found page).
const languageAtom = atomWithStorage('language','hu-HU');
export {showMenuAtom,languageAtom,showImageAtom};
