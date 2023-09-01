import { useRef } from 'react';

import styles from './MealItem.module.scss';
import Input from '../../UI/Input';

export default function MealIitem({valueFromRoot, onPrintValueFromChild, meal, description, price}) {
  const valueFromMealItem = "Value from MealItem.jsx";

  const amountRef = useRef();

  console.log("Root value:", valueFromRoot);
  onPrintValueFromChild(valueFromMealItem);

  const submitHandler = (e) => {
    e.preventDefault();

    console.dir(amountRef.current.value);
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{meal}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${price}</div>
      </div>
      <div>
        <form onSubmit={submitHandler} className={styles.form}>
          <Input
            label='Amount'
            input={
              {
                id: 'Amount',
                type: 'number',
                name: 'Amount',
                defaultValue: 3,
                min: 1,
                max: 5,
                step: 2
              }
            }
            ref={amountRef} />
          <button>+ Add</button>
        </form>
      </div>
    </li>
  )
}

