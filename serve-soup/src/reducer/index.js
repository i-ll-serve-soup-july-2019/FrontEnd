import {
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  DELETE_ITEM,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_ITEMS,
  GET_ITEMS_FAILURE,
  GET_ITEMS_SUCCESS
} from '../actions';

const initialState = {
  inventoryItems: [],
  isFetching: false,
  isRegistering: false,
  successfulRegistration: false,
  message: '',
  errorMessage: '',
  loginStart: false,
  token: '',
  loginError: '',
  username: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //Create new item section
    case ADD_ITEM_START:
      return {
        ...state,
        isFetching: true
      };
    case ADD_ITEM_SUCCESS:
      // console.log("Reducer add:", action.payload);
      return {
        ...state,
        isFetching: false,
        inventoryItems: [...state.inventoryItems, action.payload]
      };
    case DELETE_ITEM:
      return {
        ...state,
        inventoryItems: state.inventoryItems.filter(
          (item, index) => action.payload !== index
        )
      };
    //Register user section
    case REGISTER_USER_START:
      return {
        ...state,
        isRegistering: true,
        message: ''
      };
    case REGISTER_USER_SUCCESS:
      // console.log('message from reducer', action.payload);
      return {
        ...state,
        isRegistering: false,
        message: action.payload,
        successfulRegistration: true
      };
    case REGISTER_USER_FAILURE:
      // console.log('message from reducer', action.payload);
      return {
        ...state,
        isRegistering: false,
        errorMessage: action.payload
      };
    //Login
    case LOGIN_START:
      return {
        ...state,
        loginStart: true
      };
    case LOGIN_SUCCESS:
      console.log('Reducer token', action.payload);
      return {
        ...state,
        loginStart: false,
        username: action.payload
      };
    case LOGIN_FAILURE:
      console.log('Reducer token', action.payload);
      return {
        ...state,
        loginStart: false,
        loginError: action.payload
      };
    case GET_ITEMS:
      return {
        ...state,
        isFetching: true
      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        inventoryItems: action.payload,
        isFetching: false
      };
    case GET_ITEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
