import { atom } from "recoil";
import { RandomColor } from "../model/RandomColor";

export const colorsState = atom<RandomColor[]>({
  key: "colorsState" + Math.random().toString(36).substr(2, 9),
  default: [],
});
