import { ADD_ITEM } from "../actions/shopAction";

const initialState = {
  item: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const existingItemIndex = state.item.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = state.item.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        );

        return {
          ...state,
          item: updatedCart,
        };
      } else {
        return {
          ...state,
          item: [{ ...action.payload, count: 1 }, ...state.item],
        };
      }

    default:
      return state;
  }
};

export default shopReducer;
