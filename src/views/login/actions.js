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

export function userRegistrationRequest(info) {
  return {
    type: types.USER_REGISTRATION_REQUEST,
    info,
  };
}

export function userRegistrationSuccess(info) {
  return {
    type: types.USER_REGISTRATION_SUCCESS,
    info,
  };
}

export function userRegistrationFailed(info) {
  return {
    type: types.USER_REGISTRATION_FAILED,
    info,
  };
}

export function userLoginRequest(info) {
  return {
    type: types.USER_LOGIN_REQUEST,
    info,
  };
}

export function userLoginSuccess(info) {
  return {
    type: types.USER_LOGIN_SUCCESS,
    info,
  };
}

export function userLoginFailed(info) {
  return {
    type: types.USER_LOGIN_FAILED,
    info,
  };
}
