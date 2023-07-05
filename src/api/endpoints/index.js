import apiInstance from "../services";
import ApiConstants from "../services/ApiConstants";

export const home = async (info) => {
  try {
    return Promise.resolve(await apiInstance.get(ApiConstants.HOME, info));
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getWorkoutPlans = async (info) => {
  try {
    return Promise.resolve(
      await apiInstance.get(ApiConstants.WORKOUT_PLAN, info)
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export const userRegister = async (info) => {
  try {
    return Promise.resolve(
      await apiInstance.post(ApiConstants.USER_REGISTER, info)
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export const workoutPlanEnrolment = async (info) => {
  try {
    return Promise.resolve(
      await apiInstance.post(ApiConstants.WORKOUT_PLAN, info)
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export const userLogin = async (info) => {
  try {
    return Promise.resolve(
      await apiInstance.post(ApiConstants.USER_LOGIN, info)
    );
  } catch (error) {
    return Promise.reject(error);
  }
};
