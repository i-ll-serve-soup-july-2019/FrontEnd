import axios from 'axios';
import { axiosWithAuth } from '../components/axiosAuth';

//adding new items
export const ADD_ITEM_START = 'ADD_ITEM_START';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

//Register new user
export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

//Login
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const UPDATE_ITEM = 'UPDATE_ITEM';

export const DELETE_ITEM = 'DELETE_ITEM';

export const addItem = item => dispatch => {
  dispatch({ type: ADD_ITEM_START });
  // console.log("Action object", item);
  dispatch({ type: ADD_ITEM_SUCCESS, payload: item });
};

 export const delete_Item = index => dispatch => {
  dispatch({ type:delete_Item, payload: index });
 };

export const Delete_Item = item => dispatch => {
  dispatch({ type:delete_Item});
  axios
  .post('https://illservesoup.herokuapp.com/api/inventory/:itemID',)

}

export const updateItem = item => dispatch => {
  //Url needs the user ID and the item ID
  dispatch({ type: UPDATE_ITEM, payload: item });
};

//Register user

export const registerUser = (data, props) => dispatch => {
  dispatch({ type: REGISTER_USER_START });
  axios
    .post('https://illservesoup.herokuapp.com/api/useraccounts/register', data)
    .then(res => {
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data.message });
      props.history.push('/sign-in');
    })
    .catch(err => dispatch({ type: REGISTER_USER_FAILURE, payload: err }));
};

//Loggin
//Loggin endpoint "https://illservesoup.herokuapp.com/api/useraccounts/login"
//    "username": string,
//    "password": string

export const login = (creds, props) => dispatch => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post('https://illservesoup.herokuapp.com/api/useraccounts/login', creds)
    .then(res => {
      localStorage.setItem('userToken', res.data.token);
      props.history.push('/protected');
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};