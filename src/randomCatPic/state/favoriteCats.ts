import { atom } from 'recoil';
import { CatPic } from '../model/CatPic';

export const favoriteCats = atom<CatPic[]>({
    key: 'favoriteCats',
    default: [],
});