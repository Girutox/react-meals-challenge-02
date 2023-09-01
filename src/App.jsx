import Header from "./components/Header/Header";
import MealsImg from './assets/meals.jpg';

import styles from './App.module.scss';
import Meals from "./components/Meals/Meals";

function App() {
  const valueFromRoot = "Value from App.jsx";

  function printValueFromChildHandler(childValue) {
    console.log("Value from Child:", childValue);
  }

  return (
    <>
      <Header />
      <main>
        <section className={styles['main-image']}>
          <img src={MealsImg} alt="A table full of food" />
        </section>
        <Meals valueFromRoot={valueFromRoot} onPrintValueFromChild={printValueFromChildHandler} />
      </main>
    </>
  );
}

export default App;
