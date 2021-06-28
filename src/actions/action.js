/* eslint-disable no-console */
/* eslint-disable no-alert */
export const APPOINTMENTS = 'APPOINTMENTS';
export const REMOVE_APPOINTMENTS = 'REMOVE_APPOINTMENTS';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const fetchAppoinments = (userObj) => ({
  type: APPOINTMENTS,
  payload: userObj,
});

export const removeAppointment = (id) => ({
  type: REMOVE_APPOINTMENTS,
  payload: id,
});

export const loginUser = (userObj) => ({
  type: 'LOGIN_USER',
  payload: userObj,
});
