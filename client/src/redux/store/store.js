import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../useSlices/CountSlice";
import RandomSlice from "../useSlices/RandomSlice";
import ProductSlice from "../useSlices/ProductSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    count: countSlice,
    randomStore: RandomSlice,
    product: ProductSlice,
  },
  middleware: [thunk],
});
