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
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
