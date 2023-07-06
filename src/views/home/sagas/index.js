/**
 * Redux saga class init
 * There can be multiple sagas
 * Export them as an array
 * Top level sagas in store will take care of combining sagas
 */
import { takeLatest } from "redux-saga/effects";

import * as types from "../actionTypes";
import {
  workoutPlanEnrollFunction,
  getWorkoutPlanListFunction,
  getWorkoutPlanDetailsFunction,
  getUserEnrolledWorkoutPlanFunction,
} from "./homeSaga";

export const homeSaga = [
  takeLatest(types.WORKOUT_PLAN_ENROLL_REQUEST, workoutPlanEnrollFunction),
  takeLatest(types.GET_WORKOUT_PLAN_LIST_REQUEST, getWorkoutPlanListFunction),
  takeLatest(
    types.GET_WORKOUT_PLAN_DETAILS_REQUEST,
    getWorkoutPlanDetailsFunction
  ),
  takeLatest(
    types.GET_USER_ENROLLED_WORKOUT_PLAN_REQUEST,
    getUserEnrolledWorkoutPlanFunction
  ),
];
