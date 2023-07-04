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
