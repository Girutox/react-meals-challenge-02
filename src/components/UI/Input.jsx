import { forwardRef } from 'react';

import styles from './Input.module.scss';

const Input = forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        {...props.input}
        ref={ref} />
    </div>
  )
})

export default Input;