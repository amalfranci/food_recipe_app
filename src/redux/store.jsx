import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productlice";
import favouriteReduce from "./favouriteSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    favorite: favouriteReduce,
  },
});
