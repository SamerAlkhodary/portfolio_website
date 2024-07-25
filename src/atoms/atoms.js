import {atom} from 'jotai';
const showMenuAtom = atom(false);
const showImageAtom = atom({visible:false,imgSrc:''});

const languageAtom = atom('hu-HU');
export {showMenuAtom,languageAtom,showImageAtom};
