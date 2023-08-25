import React, {Fragment} from "react";

import MealsList from "./MealsList";
import MealsSummary from "./MealsSummary";

export default function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <MealsList />
    </Fragment>
  )
}