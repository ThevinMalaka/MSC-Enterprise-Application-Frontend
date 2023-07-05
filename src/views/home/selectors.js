export const getIsLoggedIn = (state) => state.homeReducers.isLoggedIn;
export const getLoggedUserData = (state) => state.loginReducers.loggedUserData;

export const getWorkoutPlanList = (state) => state.homeReducers.workoutPlanList;
export const getWorkoutPlanDetails = (state) =>
  state.homeReducers.workoutPlanDetails;
