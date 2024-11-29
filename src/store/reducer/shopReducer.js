import { ADD_ITEM } from "../actions/shopAction";

const initialState = {
  items: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

export default shopReducer;
