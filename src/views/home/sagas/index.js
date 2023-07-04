/**
 * Redux saga class init
 * There can be multiple sagas
 * Export them as an array
 * Top level sagas in store will take care of combining sagas
 */
import { takeLatest } from "redux-saga/effects";

import * as types from "../actionTypes";
import { workoutPlanEnrollFunction } from "./homeSaga";

export const homeSaga = [
  takeLatest(types.WORKOUT_PLAN_ENROLL_REQUEST, workoutPlanEnrollFunction),
];
