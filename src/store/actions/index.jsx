import * as types from './ActionTypes';

export function setInfo(data) {
  return { type: types.SET_ALL_USER_INFO, payload: data };
}

