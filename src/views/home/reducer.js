import createReducer from "../../utils/createReducer";
import * as types from "./actionTypes";

const initialState = {
  isLoggedIn: false,
  workoutPlanList: [],
  workoutPlanEnroll: false,
  submitCompletedWorkoutStatus: false,
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
  [types.GET_WORKOUT_PLAN_LIST_REQUEST](state, action) {
    return {
      ...state,
      workoutPlanEnroll: false, // reset
      submitCompletedWorkoutStatus: false, // reset
    };
  },
  [types.WORKOUT_PLAN_ENROLL_SUCCESS](state, action) {
    return {
      ...state,
      workoutPlanEnroll: true,
    };
  },
  [types.GET_USER_ENROLLED_WORKOUT_PLAN_SUCCESS](state, action) {
    return {
      ...state,
      userEnrolledWorkoutPlan: action.info,
    };
  },
  [types.SUBMIT_COMPLETED_WORKOUT_SUCCESS](state, action) {
    return {
      ...state,
      submitCompletedWorkoutStatus: true,
    };
  },
});
