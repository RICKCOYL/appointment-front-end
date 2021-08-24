export const APPOINTMENTS = 'APPOINTMENTS';
export const REMOVE_APPOINTMENTS = 'REMOVE_APPOINTMENTS';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const ADD_BOOK = 'ADD_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const GET_BOOKS = 'GET_BOOKS';
export const ADD_URGENCY = 'ADD_URGENCY';
export const UPDATE_URGENCY = 'UPDATE_URGENCY';
export const GET_URGENCY = 'GET_URGENCY';

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

export const signOut = () => (dispatch) => {
  dispatch({
    type: SIGN_OUT,
  });
};

export const doctorName = (userObj) => ({
  type: 'DOCTOR_NAME',
  payload: userObj,
});
