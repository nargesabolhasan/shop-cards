import { ADD_ITEM } from "../actions/shopAction";

const initialState = {
  item: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const indexOfItem = state.item.findIndex(
        (card) => card.id === action.payload.id
      );

      if (indexOfItem !== -1) {
        const updateCount = state.item.map((card, index) =>
          index === indexOfItem ? { ...card, count: card.count + 1 } : card
        );
        return {
          ...state,
          item: [...updateCount],
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
