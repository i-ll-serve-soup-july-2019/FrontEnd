import axios from 'axios';

//adding new items
export const ADD_ITEM_START = 'ADD_ITEM_START';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

//Register new user
export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const UPDATE_ITEM = 'UPDATE_ITEM';

export const DELETE_ITEM = 'DELETE_ITEM';

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

//Register user

export const registerUser = data => dispatch => {
  dispatch({ type: REGISTER_USER_START });
  axios
    .post('https://illservesoup.herokuapp.com/api/useraccounts/register', data)
    .then(res =>
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data.message })
    )
    .catch(err => dispatch({ type: REGISTER_USER_FAILURE, payload: err }));
};
