import { put, call } from "redux-saga/effects";
import httpStatus from "http-status";
import { toastr } from "react-redux-toastr";

import * as homeAction from "../actions";
import {
  workoutPlanEnrolment,
  getWorkoutPlans,
  getWorkoutPlanDetails,
  getUserEnrolledWorkoutPlan,
  submitWorkoutPlan,
  addWeight,
  getWeightList,
} from "../../../api/endpoints";

export function* workoutPlanEnrollFunction(payload) {
  try {
    const { info } = payload;
    const { data, status } = yield call(workoutPlanEnrolment, info);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    yield put(homeAction.workoutPlanEnrollSuccess());
    toastr.clean(); // clean the previous toastr
    toastr.success("Success", "Workout plan enrolled successfully.");
    setTimeout(() => {
      toastr.clean(); //  clean the toastr after 3 seconds
    }, 4000);
  } catch (error) {
    yield put(homeAction.workoutPlanEnrollFailed());
    toastr.clean(); // clean the previous toastr
    toastr.error("Error", "Something went wrong! Please try again later.");
    setTimeout(() => {
      toastr.clean(); //  clean the toastr after 3 seconds
    }, 4000);
  }
}

export function* getWorkoutPlanListFunction(payload) {
  try {
    const { info } = payload;
    const { data, status } = yield call(getWorkoutPlans);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    yield put(homeAction.getWorkoutPlanListSuccess(data));
  } catch (error) {
    yield put(homeAction.getWorkoutPlanListFailed());
  }
}

export function* getWorkoutPlanDetailsFunction(payload) {
  try {
    const { info } = payload;
    const { data, status } = yield call(getWorkoutPlanDetails, info);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    yield put(homeAction.getWorkoutPlanDetailsSuccess(data));
  } catch (error) {
    yield put(homeAction.getWorkoutPlanDetailsFailed());
  }
}

export function* submitCompletedWorkoutFunction(payload) {
  try {
    const { info } = payload;
    const { data, status } = yield call(workoutPlanEnrolment);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    yield put(homeAction.submitCompletedWorkoutSuccess());
  } catch (error) {
    yield put(homeAction.submitCompletedWorkoutFailed());
    toastr.clean(); // clean the previous toastr
    toastr.error("Error", "Something went wrong! Please try again later.");
    setTimeout(() => {
      toastr.clean(); //  clean the toastr after 3 seconds
    }, 4000);
  }
}

export function* getUserEnrolledWorkoutPlanFunction(payload) {
  try {
    const { info } = payload;
    const { data, status } = yield call(getUserEnrolledWorkoutPlan, info);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    yield put(homeAction.getUserEnrolledWorkoutPlanSuccess(data));
  } catch (error) {
    yield put(homeAction.getUserEnrolledWorkoutPlanFailed());
  }
}

export function* completeWorkoutFunction(payload) {
  try {
    const { info } = payload;
    const { data, status } = yield call(submitWorkoutPlan, info);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    yield put(homeAction.submitCompletedWorkoutSuccess());
    toastr.clean(); // clean the previous toastr
    toastr.success("Success", "Workout completed successfully.");
    setTimeout(() => {
      toastr.clean(); //  clean the toastr after 3 seconds
    }, 4000);
  } catch (error) {
    yield put(homeAction.submitCompletedWorkoutFailed());
    toastr.clean(); // clean the previous toastr
    toastr.error("Error", "Something went wrong! Please try again later.");
    setTimeout(() => {
      toastr.clean(); //  clean the toastr after 3 seconds
    }, 4000);
  }
}

export function* addWeightFunction(payload) {
  try {
    const { info } = payload;
    const { data, status } = yield call(addWeight, info);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    yield put(homeAction.addWeightSuccess());
    toastr.clean(); // clean the previous toastr
    toastr.success("Success", "Weight added successfully.");
    setTimeout(() => {
      toastr.clean(); //  clean the toastr after 3 seconds
    }, 4000);
  } catch (error) {
    yield put(homeAction.addWeightFailed());
    toastr.clean(); // clean the previous toastr
    toastr.error("Error", "Something went wrong! Please try again later.");
    setTimeout(() => {
      toastr.clean(); //  clean the toastr after 3 seconds
    }, 4000);
  }
}

export function* getWeightListFunction(payload) {
  try {
    const { info } = payload;
    const { data, status } = yield call(getWeightList, info);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    yield put(homeAction.getWeightListSuccess(data));
  } catch (error) {
    yield put(homeAction.getWeightListFailed());
  }
}
