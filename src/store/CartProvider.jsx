import { useReducer } from "react";
import CartContext from "./CartContext";

// ESTADO INICIAL
const defaultState = {
  mealItems: []
};

// FUNCION REDUCTORA
function cartReducer(state, action) {
  if (action.type === 'add') {
    return {
      ...state,
      mealItems: [...state.mealItems, action.mealItem]
    }
  } else if (action.type === 'delete') {
    // TO DO
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
    addMealItemHandler: addMealItemHandler,
    deleteMealItemHandler: deleteMealItemHandler
  }

  return <CartContext.Provider value={cartContextValue}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider;