import { createSlice } from "@reduxjs/toolkit";

import toast from "react-hot-toast";

const initialState = {
  value: JSON.parse(localStorage.getItem("meals")) || [],
};

export const favouriteSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const mealIndex = state.value.findIndex(
        (meal) => meal.id === action.payload.id
      );
      if (mealIndex === -1) {
        const updateValue = [...state.value, action.payload];
        state.value = updateValue;
        localStorage.setItem("meals", JSON.stringify(updateValue));
        toast.success("Added to favourite");
      } else {
        toast.error("Already is favourite Meals");
      }
    },
    removeFromCart: (state, action) => {
      const updateValue = state.value.filter(
        (meal) => meal.id !== action.payload
      );
      state.value = updateValue;
      localStorage.setItem("meals", JSON.stringify(updateValue));
      toast.success("Remove from favourtes.");
    },
  },
});

export const { addToCart, removeFromCart } = favouriteSlice.actions;
export default favouriteSlice.reducer;
