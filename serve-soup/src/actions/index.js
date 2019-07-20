import axios from 'axios';
import { axiosWithAuth } from '../components/axiosAuth';

//Get  items
export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';

//adding new items
export const ADD_ITEM_START = 'ADD_ITEM_START';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

//Delete items
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

//Update items
export const UPDATE_ITEM_START = 'UPDATE_ITEM_START';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const UPDATE_ITEM_FAILURE = 'UPDATE_ITEM_FAILURE';

//Register new user
export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

//Login
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const addItem = item => dispatch => {
  dispatch({ type: ADD_ITEM_START });
  // console.log("Action object", item);
  axiosWithAuth()
    .post(`https://illservesoup.herokuapp.com/api/inventory/`, item)
    .then(res => dispatch({ type: ADD_ITEM_SUCCESS, payload: res }))
    .catch(err => dispatch({ type: ADD_ITEM_FAILURE, payload: err }));
};


export const updateItem = item => dispatch => {
  //Url needs the user ID and the item ID
  dispatch({ type: UPDATE_ITEM, payload: item });

export const deleteItem = (item, props) => dispatch => {
  dispatch({ type: DELETE_ITEM });
  axiosWithAuth()
    .delete(
      `https://illservesoup.herokuapp.com/api/inventory/${item.username}/${
        item.id
      }`
    )
    .then(res => {
      dispatch({ type: DELETE_ITEM_SUCCESS, payload: res });
      props.history.push('/protected');
    })
    .catch(err => dispatch({ type: DELETE_ITEM_FAILURE, payload: err }));
};

//Updating items

export const updateItem = (item, props) => dispatch => {
  dispatch({ type: UPDATE_ITEM_START });
  // console.log('Updated item', item);
  // const username = props.userName;
  // const id = props.inventoryItems[0].id;
  console.log('User name from actions', item.username);
  console.log('ID from actions', item.id);
  //Url needs the username and the item ID
  axiosWithAuth()
    .put(
      `https://illservesoup.herokuapp.com/api/inventory/${item.username}/${
        item.id
      }`,
      item
    )
    //Redirect user to inventory page
    .then(res => {
      // console.log('Action res:', res);
      dispatch({ type: UPDATE_ITEM_SUCCESS });
      props.history.push('/protected');
    })
    .catch(err => dispatch({ type: UPDATE_ITEM_FAILURE, payload: err }));

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
      localStorage.setItem('username', creds.username);
      props.history.push('/protected');
      dispatch({ type: LOGIN_SUCCESS, payload: creds.username });
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));

export const getItems = username => dispatch => {
  dispatch({ type: GET_ITEMS });
  axiosWithAuth()
    .get(`https://illservesoup.herokuapp.com/api/inventory/${username}`)
    .then(res => dispatch({ type: GET_ITEMS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ITEMS_FAILURE, payload: err }));
};

