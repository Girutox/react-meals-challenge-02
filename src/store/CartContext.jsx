import { createContext } from 'react';

const CartContext = createContext({
  mealItems: [],
  addMealItemHandler: (mealItem) => {},
  deleteMealItemHandler: (mealId) => {}
});

export default CartContext;