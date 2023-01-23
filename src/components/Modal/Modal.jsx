// import PropTypes from 'prop-types';
import { Component } from 'react';
import { Overlay, ModalForm } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  hanleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { modalImage, onClose } = this.props;
    return createPortal(
      <Overlay onClick={this.hanleBackdropClick} onClose={onClose}>
        <ModalForm>
          <img src={modalImage} alt="" />
        </ModalForm>
      </Overlay>,
      modalRoot
    );
  }
}
