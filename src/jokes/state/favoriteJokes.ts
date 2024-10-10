import {atom} from 'recoil';

type Joke = {
    value: string;
    creator: string;
  }; 

export const favoriteJokes = atom<Joke[]>({
    key: 'favoriteJokes' + Math.random().toString(36).substr(2, 9),
    default: [],
});

 