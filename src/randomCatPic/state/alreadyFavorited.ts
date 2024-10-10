import {atom} from "recoil";

export const alreadyFavorited = atom<boolean>({
    key: 'alreadyFavorited' + Math.random().toString(36).substr(2, 9),
    default: false,
});