import Card from "../UI/Card";
import MealIitem from "./MealItem/MealItem";

import styles from './MealsList.module.scss';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

export default function MealsList(props) {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((item) => {
            return (
              <MealIitem
                onPrintValueFromChild={props.onPrintValueFromChild}
                valueFromRoot={props.valueFromRoot}
                key={item.id}
                id={item.id}
                meal={item.name}
                description={item.description}
                price={item.price} />
            )
          })}
        </ul>
      </Card>
    </section>
  )
}