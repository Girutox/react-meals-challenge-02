import HeaderCartIcon from './HeaderCartIcon';

import styles from './HeaderCartButton.module.scss';

export default function HeaderCartButton() {
  return (
    <button className={styles.button}>
      <div className={styles.icon}>
        <HeaderCartIcon />
      </div>
      <span>Your Cart</span>
      <div className={styles.badge}>
        0
      </div>
    </button>
  );
}