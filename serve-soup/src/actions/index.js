// import axios from "axios";

export const ADD_ITEM_START = "ADD_ITEM_START";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE";

export const UPDATE_ITEM = "UPDATE_ITEM";

export const DELETE_ITEM = "DELETE_ITEM";

export const addItem = item => dispatch => {
  dispatch({ type: ADD_ITEM_START });
  // console.log("Action object", item);
  dispatch({ type: ADD_ITEM_SUCCESS, payload: item });
};

export const deleteItem = index => dispatch => {
  dispatch({ type: DELETE_ITEM, payload: index });
};

export const updateItem = item => dispatch => {
  dispatch({ type: UPDATE_ITEM, payload: item });
};
