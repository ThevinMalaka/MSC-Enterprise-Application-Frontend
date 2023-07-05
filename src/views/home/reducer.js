import createReducer from "../../utils/createReducer";
import * as types from "./actionTypes";

const initialState = {
  isLoggedIn: false,
  workoutPlanList: [],
};

export const homeReducers = createReducer(initialState, {
  [types.GET_WORKOUT_PLAN_LIST_SUCCESS](state, action) {
    return {
      ...state,
      workoutPlanList: action.info,
    };
  },
  [types.GET_WORKOUT_PLAN_DETAILS_SUCCESS](state, action) {
    return {
      ...state,
      workoutPlanDetails: action.info,
    };
  },
});
