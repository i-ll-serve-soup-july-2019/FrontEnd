import { ADD_ITEM_START, ADD_ITEM_SUCCESS, DELETE_ITEM } from "../actions";

const initialState = {
  inventoryItems: [
    {
      name: "Yellow onions"
    },
    {
      name: "Potatos"
    },
    {
      name: "Whole Milk"
    }
  ],
  isFetching: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_START:
      return {
        ...state,
        isFetching: true
      };
    case ADD_ITEM_SUCCESS:
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
    default:
      return state;
  }
};

export default reducer;
