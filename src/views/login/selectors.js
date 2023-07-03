// import { createSelector } from 'reselect';

// import { initialState } from './reducer';

// const selectShowcasesDomain = state => state.showcases || initialState;

// const selectShowcases = () => createSelector(selectShowcasesDomain, subState => subState);

// export { selectShowcases, selectShowcasesDomain };

export const getIsLoggedIn = (state) => state.loginReducers.isLoggedIn;
export const getUserRegistrationSuccess = (state) =>
  state.loginReducers.userRegistrationSuccess;
