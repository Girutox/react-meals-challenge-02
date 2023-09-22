import { useEffect, useState } from 'react';
import CartIcon from './CartIcon';

import styles from './HeaderCardButton.module.scss';
import Cart from '../Cart/Cart';

import { useSelector } from 'react-redux';

export default function HeaderCardButton() {
  const [showModal, setShowModal] = useState(false);
  const [showBump, setShowBump] = useState(false);

  const mealItems = useSelector((state) => state.cart.mealItems);

  const buttonClasses = `${styles.button} ${showBump && styles.bump}`;

  useEffect(() => {
    if (!mealItems.length) return;

    setShowBump(true);

    const timeoutId = setTimeout(() => {
      setShowBump(false);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [mealItems])

  const showCartHandler = () => {
    setShowModal(true);
  }

  const hideCartHandler = () => {
    setShowModal(false);
  }

  return (
    <>
      <button onClick={showCartHandler} className={buttonClasses}>
        <div className={styles.icon}>
          <CartIcon />
        </div>
        <span>Your Cart</span>
        <div className={styles.badge}>
          {mealItems.length}
        </div>
      </button>
      {showModal && <Cart onClose={hideCartHandler} />}
    </>
  )
}