import axios from 'axios';

export const ADD_ITEM_START = "GET_SMURF_START";
export const ADD_ITEM_SUCCESS = "GET_SMURF_SUCCESS";
export const ADD_ITEM_FAILURE = "GET_SMURF_FAILURE";

export const addItem = item => dispatch => {
  dispatch({type:ADD_ITEM_START});
  dispatch({type:ADD_ITEM_SUCCESS, payload: item});
}
