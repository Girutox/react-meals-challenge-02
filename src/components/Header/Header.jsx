import HeaderCardButton from './HeaderCardButton';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>ReactMeals</h1>
      <HeaderCardButton />
    </header>
  );
}