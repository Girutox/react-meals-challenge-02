import { useRef, useContext } from 'react';

import styles from './MealItem.module.scss';
import Input from '../../UI/Input';

import CartContext from '../../../store/CartContext';

export default function MealIitem({valueFromRoot, onPrintValueFromChild, meal, description, price}) {
  const cartContext = useContext(CartContext);

  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    cartContext.addMealItemHandler({
      meal: 'Meal 01',
      price: 99.9,
      amount: amountRef.current.value
    });
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
                defaultValue: 1,
                min: 1,
                max: 5,
                step: 1
              }
            }
            ref={amountRef} />
          <button>+ Add</button>
        </form>
      </div>
    </li>
  )
}

