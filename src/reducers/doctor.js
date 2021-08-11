import { DOCTOR_NAME } from '../actions/action';

const doctor = (state = [], action) => {
  switch (action.type) {
    case DOCTOR_NAME:
      return [action.doctor, ...state];
    default:
      return state;
  }
};

export default doctor;
