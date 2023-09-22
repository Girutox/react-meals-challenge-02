// import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement, incrementByAmount } from '../../store/counterSlice'

import styles from './CartItem.module.scss';

const CartItem = ({id, name, price, amount, addMeal, deleteMeal}) => {
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()

  const addMealHandler = () => {
    addMeal({
      id,
      name,
      price,
      amount: 1
    });

    // dispatch(incrementByAmount(5));
  }

  const deleteMealHandler = () => {
    deleteMeal(id);

    // dispatch(decrement());
  }

  return <li className={styles['cart-item']}>
    <div>
      <h2>{name}</h2>
      <div className={styles.summary}>
        <span className={styles.price}>${price}</span>
        <span className={styles.amount}>x{amount}</span>

        {/* <h4>RV: {count}</h4> */}
      </div>
    </div>
    <div className={styles.actions}>
      <button onClick={deleteMealHandler}>-</button>
      <button onClick={addMealHandler}>+</button>
    </div>
  </li>
}

export default CartItem;