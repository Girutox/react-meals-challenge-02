import { createContext } from 'react';

const CartContext = createContext({
  mealItems: [],
  totalAmount: 0,
  addMealItemHandler: (mealItem) => {},
  deleteMealItemHandler: (mealId) => {}
});

export default CartContext;