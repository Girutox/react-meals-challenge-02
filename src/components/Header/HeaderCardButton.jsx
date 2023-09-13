import { useContext, useState } from 'react';
import CartIcon from './CartIcon';
import Card from '../UI/Card';

import styles from './HeaderCardButton.module.scss';
import CartContext from '../../store/CartContext';
import Modal from '../UI/Modal';

export default function HeaderCardButton() {
  const [showModal, setShowModal] = useState(false);
  const cartContext = useContext(CartContext);

  // console.log(cartContext);

  const showCartHandler = () => {
    setShowModal(true);
  }

  const hideCartHandler = () => {
    setShowModal(false);
  }

  return (
    <>
      <button onClick={showCartHandler} className={styles.button}>
        <div className={styles.icon}>
          <CartIcon />
        </div>
        <span>Your Cart</span>
        <div className={styles.badge}>
          {cartContext.mealItems.length}
        </div>
      </button>
      {showModal &&
        <Modal onClose={hideCartHandler}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique velit ipsum hic repellat est ullam non? Reiciendis odit suscipit consequatur quasi tenetur, doloribus repellat dignissimos debitis corporis a corrupti veniam.</p>
          <button onClick={hideCartHandler}>Close</button>
          <button>Order</button>
        </Modal>}
    </>
  )
}