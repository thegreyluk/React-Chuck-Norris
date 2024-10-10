import { atom } from "recoil";
import { CatPic } from '../model/CatPic';

export const currentCat = atom<CatPic>({
    key: 'currentCat' + Math.random().toString(36).substr(2, 9),
    default: undefined,
})
