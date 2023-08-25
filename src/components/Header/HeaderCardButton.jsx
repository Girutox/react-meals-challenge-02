import CartIcon from './CartIcon';

import styles from './HeaderCardButton.module.scss';

export default function HeaderCardButton() {
  return (
    <button className={styles.button}>
      <div className={styles.icon}>
        <CartIcon />
      </div>
      <span>Your Cart</span>
      <div className={styles.badge}>
        0
      </div>
    </button>
  )
}