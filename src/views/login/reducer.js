import createReducer from "../../utils/createReducer";
import * as types from "./actionTypes";

const initialState = {
  isLoggedIn: false,
};

export const loginReducers = createReducer(initialState, {
  [types.TEST_ACTION](state, action) {
    console.log("reducersss", action);
    return {
      ...state,
      isLoggedIn: action.info,
    };
  },
  [types.USER_REGISTRATION_SUCCESS](state, action) {
    console.log("reducersss", action);
    return {
      ...state,
      isLoggedIn: action.info,
    };
  },
});