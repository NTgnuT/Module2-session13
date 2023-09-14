import { ACT_RANDOM } from "../constrains";

const initialstate = [];

export const randomReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ACT_RANDOM:
      return [...state, action.payload];

    default:
      return state;
  }
};
