import {
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  DELETE_ITEM,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from '../actions';

const initialState = {
  inventoryItems: [
    {
      name: 'Yellow onions',
      category: 'Produce',
      quantity: 14
    },
    {
      name: 'Potatos',
      category: 'Produce',
      quantity: 4
    },
    {
      name: 'Whole Milk',
      category: 'Dairy',
      quantity: 2
    }
  ],
  isFetching: false,
  isRegistering: false,
  successfulRegistration: false,
  message: '',
  errorMessage: ''
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
      console.log('message from reducer', action.payload);
      return {
        ...state,
        isRegistering: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
