import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mealItems: [],
  totalAmount: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addMeal(state, action) {
      const existingItem = state.mealItems.find((item) => item.id === action.payload.id);
      // Si existe el item
      if (existingItem) {
        existingItem.amount += action.payload.amount;
      } else {
        // No existe el item
        state.mealItems.push(action.payload);
      }

      state.totalAmount = state.mealItems.reduce((prev, current) => prev + (current.price * current.amount), 0);
    },
    deleteMeal(state, action) {
      const existingItem = state.mealItems.find((item) => item.id === action.payload);

      if (existingItem.amount === 1) {
        state.mealItems = state.mealItems.filter(item => item.id !== action.payload);
      } else {
        existingItem.amount -= 1;
      }

      state.totalAmount = state.mealItems.reduce((prev, current) => prev + (current.price * current.amount), 0);
    }
  }
})

export const {addMeal, deleteMeal} = cartSlice.actions;
export default cartSlice.reducer;