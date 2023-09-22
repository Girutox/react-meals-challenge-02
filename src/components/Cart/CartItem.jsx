import styles from './CartItem.module.scss';

const CartItem = ({id, name, price, amount, addMeal, deleteMeal}) => {
  const addMealHandler = () => {
    addMeal({
      id,
      name,
      price,
      amount: 1
    });
  }

  const deleteMealHandler = () => {
    deleteMeal(id);
  }

  return <li className={styles['cart-item']}>
    <div>
      <h2>{name}</h2>
      <div className={styles.summary}>
        <span className={styles.price}>${price}</span>
        <span className={styles.amount}>x{amount}</span>
      </div>
    </div>
    <div className={styles.actions}>
      <button onClick={deleteMealHandler}>-</button>
      <button onClick={addMealHandler}>+</button>
    </div>
  </li>
}

export default CartItem;