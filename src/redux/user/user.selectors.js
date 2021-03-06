import { createSelector } from 'reselect';

//Input Selector
const selectUser = (state) => state.user;


export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
