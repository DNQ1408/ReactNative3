import { CHANGE_BASE_VALUE, CHANGE_SCREEN } from "./types";

export const createChangeBaseValueAction = value => ({
  type: CHANGE_BASE_VALUE,
  payload: value
});


export const CONVERT_SCREEN = "CONVERT_SCREEN";
export const CATEGORIES_SCREEN = "CATEGORIES_SCREEN";

export const createChangeScreenAction = screen => ({
  type: CHANGE_SCREEN,
  payload: screen
});