import React, {Fragment} from "react";

import MealsList from "./MealsList";
import MealsSummary from "./MealsSummary";

export default function Meals(props) {
  return (
    <Fragment>
      <MealsSummary />
      <MealsList valueFromRoot={props.valueFromRoot} onPrintValueFromChild={props.onPrintValueFromChild} />
    </Fragment>
  )
}