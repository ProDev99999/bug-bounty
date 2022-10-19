import {  SET_ALL_USER_INFO } from '../actions/ActionTypes';

const initialState = {
  email_addr: 'sam******@gmail.com',
  full_name: 'Sam Arafat',
};

export default function user_info(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_USER_INFO:
      console.log("====: set-all-user-info :====", {
        ...state,
        ...action.payload
      })
      return {
        ...state,
        // full_name: action.payload.name,
        // email_addr: action.payload.email,
        // company_name: action.payload.company,

        ...action.payload
      };

    default:
      return state;
  }
}
