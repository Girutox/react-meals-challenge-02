import CartItem from './CartItem';
import Modal from '../UI/Modal';
import styles from './Cart.module.scss';
import {useSelector, useDispatch} from 'react-redux';
import {addMeal, deleteMeal} from '../../store/cartSlice';
// import { useContext } from 'react';
// import CartContext from '../../store/CartContext';

const Cart = ({onClose}) => {
  // const { mealItems, totalAmount, addMealItemHandler, deleteMealItemHandler } = useContext(CartContext);
  const {mealItems, totalAmount} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addMealItemHandler = (item) => {
    dispatch(addMeal(item));
  }

  const deleteMealItemHandler = (id) => {
    dispatch(deleteMeal(id));
  }

  return (
    <Modal onClose={onClose}>
      <ul className={styles['cart-items']}>
        {mealItems.map(item => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              addMeal={addMealItemHandler}
              deleteMeal={deleteMealItemHandler}/>
          )
        })}
      </ul>
      <section className={styles.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </section>
      <section className={styles.actions}>
        <button className={styles['button--alt']} onClick={() => { onClose() }}>Close</button>
        <button className={styles.button}>Order</button>
      </section>
    </Modal>
  )
}

export default Cart;