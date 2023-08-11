import HeaderCartButton from './HeaderCartButton';
import MealImage from '../../assets/meals.jpg';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <>
      <header className={styles.container}>
        <h1 className={styles.title}>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={MealImage} alt="A table full of delicious food"/>
      </div>
    </>
  )
}