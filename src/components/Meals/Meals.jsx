import React, { Fragment } from "react";

import MealsList from "./MealsList";
import MealsSummary from "./MealsSummary";

// import CartContext from "../../store/CartContext";

export default function Meals(props) {
  return (
    <Fragment>
      {/* <CartContext.Provider value={999}> */}
      <MealsSummary />
      {/* </CartContext.Provider> */}
      {/* <CartContext.Provider value={333}> */}
      <MealsList valueFromRoot={props.valueFromRoot} onPrintValueFromChild={props.onPrintValueFromChild} />
      {/* </CartContext.Provider> */}
    </Fragment>
  )
}