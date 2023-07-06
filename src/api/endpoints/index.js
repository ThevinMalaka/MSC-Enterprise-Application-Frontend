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

export const getWorkoutPlanDetails = async (info) => {
  try {
    return Promise.resolve(
      await apiInstance.get(`${ApiConstants.WORKOUT_PLAN}/${info}`)
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
      await apiInstance.post(ApiConstants.WORKOUT_PLAN_ENROLL, info)
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

export const getUserEnrolledWorkoutPlan = async (info) => {
  try {
    return Promise.resolve(
      await apiInstance.get(
        `${ApiConstants.USER_ENROLLED_WORKOUT_PLAN}/${info}`
      )
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export const submitWorkoutPlan = async (info) => {
  try {
    return Promise.resolve(
      await apiInstance.put(`${ApiConstants.COMPLETE_WORKOUT}/${info}`)
    );
  } catch (error) {
    return Promise.reject(error);
  }
};
