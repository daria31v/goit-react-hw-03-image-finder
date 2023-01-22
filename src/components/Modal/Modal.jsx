// import PropTypes from 'prop-types';
import { Component } from 'react';
import {Overlay, ModalForm} from './Modal.styled'
// Під час кліку на елемент галереї повинно відкриватися модальне вікно з темним оверлеєм і відображатися велика версія зображення. Модальне вікно повинно закриватися по натисканню клавіші ESC або по кліку на оверлеї.

// Зовнішній вигляд схожий на функціонал цього VanillaJS-плагіна, тільки замість білого модального вікна рендериться зображення (у прикладі натисніть Run). Анімацію робити не потрібно!

export class Modal extends Component {
  componentDidMount() {
    console.log('modal DID MOUNT');
  }
  componentWillUnmount() {
    console.log('modal WILL');
  }

  render() {
    return (
      <Overlay>
        <ModalForm>
          <img src="" alt="" />
        </ModalForm>
      </Overlay>
    );
  }
}

