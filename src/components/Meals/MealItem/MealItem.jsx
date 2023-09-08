import { useRef, useContext, useState, useReducer } from 'react';

import styles from './MealItem.module.scss';
import Input from '../../UI/Input';

import CartContext from '../../../store/CartContext';

function countReducer(state, action) {
  return {
    count: state.count + 1
  }
}

export default function MealIitem({id, meal, description, price}) {
  const [count, setCount] = useState(0);
  const [countState, dispatchCountAction] = useReducer(countReducer, { count: 0 });

  const cartContext = useContext(CartContext);

  const amountRef = useRef();

  console.log('MAIN COUNT:', count);

  const submitHandler = (e) => {
    e.preventDefault();

    // setCount(count + 1);
    // setCount((prev) => {
    //   return prev + 1;
    // });
    // dispatchCountAction();

    // for (let index = 1; index <= 10; index++) {
    //   // setCount((prev) => {
    //   //   return prev + 1;
    //   // });
    //   // setCount(count + 1);
    //   dispatchCountAction();
    // }

    setCount((prev) => {
      return prev + 1;
    }); // PREV = 0
    setCount((prev) => {
      return prev + 1;
    }); // PREV = 1
    setCount((prev) => {
      return prev + 1;
    }); // PREV = 2
    setCount((prev) => {
      return prev + 1;
    }); // PREV = 3

    console.log('NEW COUNT:', count);

    // cartContext.addMealItemHandler({
    //   id,
    //   name: meal,
    //   price,
    //   amount: +amountRef.current.value
    // });
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

