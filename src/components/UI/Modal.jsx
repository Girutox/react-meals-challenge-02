import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';

const portalElement = document.getElementById('overlays');

const Backdrop = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onClose}>
      {props.children}
    </div>
  )
}

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

const Modal = (props) => {
  return <>
    {ReactDOM.createPortal(
      <>
        <Backdrop onClose={props.onClose} />
        <ModalOverlay>
          {props.children}
        </ModalOverlay>
      </>, portalElement)}
  </>
}

export default Modal;