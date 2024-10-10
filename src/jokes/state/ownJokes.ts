import { atom } from "recoil";
import { OwnJoke } from "../model/Joke";

export const ownJokes = atom<OwnJoke[]>({
    key: 'ownJokes' + Math.random().toString(36).substr(2, 9),
    default: [],
});
