import { useContext } from 'react';
import CartIcon from './CartIcon';

import styles from './HeaderCardButton.module.scss';
import CartContext from '../../store/CartContext';

export default function HeaderCardButton() {
  const cartContext = useContext(CartContext);

  console.log(cartContext);

  return (
    <button className={styles.button}>
      <div className={styles.icon}>
        <CartIcon />
      </div>
      <span>Your Cart</span>
      <div className={styles.badge}>
        {cartContext.mealItems.length}
      </div>
    </button>
  )
}