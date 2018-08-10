import { CHANGE_SCREEN } from "../actions/types";
import { CONVERT_SCREEN } from "../actions/";

export default (state = CONVERT_SCREEN, action) =>
  action.type === CHANGE_SCREEN
    ? action.payload
    : state;