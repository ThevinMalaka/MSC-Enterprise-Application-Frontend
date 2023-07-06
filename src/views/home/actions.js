import * as types from "./actionTypes";

export function testAction(info) {
  console.log("info", info);
  return {
    type: types.TEST_ACTION,
    info,
  };
}

export function testActionSuccess(info) {
  return {
    type: types.TEST_ACTION_SUCCESS,
    info,
  };
}

export function testActionFailed(info) {
  return {
    type: types.TEST_ACTION_FAILED,
    info,
  };
}

// ---------------------------------------------

export function workoutPlanEnrollRequest(info) {
  return {
    type: types.WORKOUT_PLAN_ENROLL_REQUEST,
    info,
  };
}

export function workoutPlanEnrollSuccess(info) {
  return {
    type: types.WORKOUT_PLAN_ENROLL_SUCCESS,
    info,
  };
}

export function workoutPlanEnrollFailed(info) {
  return {
    type: types.WORKOUT_PLAN_ENROLL_FAILED,
    info,
  };
}

// ---------------------------------------------

export function getWorkoutPlanListRequest(info) {
  return {
    type: types.GET_WORKOUT_PLAN_LIST_REQUEST,
    info,
  };
}

export function getWorkoutPlanListSuccess(info) {
  return {
    type: types.GET_WORKOUT_PLAN_LIST_SUCCESS,
    info,
  };
}

export function getWorkoutPlanListFailed(info) {
  return {
    type: types.GET_WORKOUT_PLAN_LIST_FAILED,
    info,
  };
}

// ---------------------------------------------

export function getWorkoutPlanDetailsRequest(info) {
  return {
    type: types.GET_WORKOUT_PLAN_DETAILS_REQUEST,
    info,
  };
}

export function getWorkoutPlanDetailsSuccess(info) {
  return {
    type: types.GET_WORKOUT_PLAN_DETAILS_SUCCESS,
    info,
  };
}

export function getWorkoutPlanDetailsFailed(info) {
  return {
    type: types.GET_WORKOUT_PLAN_DETAILS_FAILED,
    info,
  };
}

// ---------------------------------------------

export function submitCompletedWorkoutRequest(info) {
  return {
    type: types.SUBMIT_COMPLETED_WORKOUT_REQUEST,
    info,
  };
}

export function submitCompletedWorkoutSuccess(info) {
  return {
    type: types.SUBMIT_COMPLETED_WORKOUT_SUCCESS,
    info,
  };
}

export function submitCompletedWorkoutFailed(info) {
  return {
    type: types.SUBMIT_COMPLETED_WORKOUT_FAILED,
    info,
  };
}

// ---------------------------------------------

export function getUserEnrolledWorkoutPlanRequest(info) {
  return {
    type: types.GET_USER_ENROLLED_WORKOUT_PLAN_REQUEST,
    info,
  };
}

export function getUserEnrolledWorkoutPlanSuccess(info) {
  return {
    type: types.GET_USER_ENROLLED_WORKOUT_PLAN_SUCCESS,
    info,
  };
}

export function getUserEnrolledWorkoutPlanFailed(info) {
  return {
    type: types.GET_USER_ENROLLED_WORKOUT_PLAN_FAILED,
    info,
  };
}

// ---------------------------------------------
