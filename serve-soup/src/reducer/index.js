import { ADD_ITEM_START, ADD_ITEM_SUCCESS, DELETE_ITEM } from "../actions";

const initialState = {
  inventoryItems: [
    {
      name: "Yellow onions",
      category: "Produce",
      quantity: 14
    },
    {
      name: "Potatos",
      category: "Produce",
      quantity: 4
    },
    {
      name: "Whole Milk",
      category: "Dairy",
      quantity: 2
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
    default:
      return state;
  }
};

export default reducer;
