import { useReducer } from "react";
import CartContext from "./CartContext";

// ESTADO INICIAL
const defaultState = {
  mealItems: [],
  totalAmount: 0
};

// FUNCION REDUCTORA
function cartReducer(state, action) {
  const currentItems = [...state.mealItems];

  if (action.type === 'add') {
    const existingItem = currentItems.find((item) => item.id === action.mealItem.id);
    // Si existe el item
    if (existingItem) {
      existingItem.amount += action.mealItem.amount;
    } else {
      // No existe el item
      currentItems.push(action.mealItem);
    }

    const totalAmount = currentItems.reduce((prev, current) => prev + (current.price * current.amount), 0);

    return {
      mealItems: currentItems,
      totalAmount
    }
  } else if (action.type === 'delete') {
    const existingItem = currentItems.find((item) => item.id === action.mealId);

    let newMeals = null;

    if (existingItem.amount === 1) {
      newMeals = currentItems.filter(item => item.id !== action.mealId);
    } else {
      existingItem.amount -= 1;
      newMeals = currentItems;
    }

    const totalAmount = newMeals.reduce((prev, current) => prev + (current.price * current.amount), 0);

    return {
      mealItems: newMeals,
      totalAmount
    }
  }
} 

const CartProvider = (props) => {
  const addMealItemHandler = (mealItem) => {
    dispatchCartAction({ type: 'add', mealItem });
  }

  const deleteMealItemHandler = (mealId) => {
    dispatchCartAction({ type: 'delete', mealId });
  }

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  const cartContextValue = {
    mealItems: cartState.mealItems,
    totalAmount: cartState.totalAmount,
    addMealItemHandler: addMealItemHandler,
    deleteMealItemHandler: deleteMealItemHandler
  }

  return <CartContext.Provider value={cartContextValue}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider;