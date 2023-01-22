import { Component } from 'react';
import { Container } from './App.styled';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <Container>
        <button type='button' onClick={this.toggleModal}>Open</button>
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque maiores reiciendis voluptates, accusamus est eos qui sed debitis tenetur illo minima? Reiciendis asperiores, cumque voluptate architecto ducimus vel laudantium dolor!</h2>
        {showModal && (<Modal onClose={this.toggleModal}>
          <h1>this is content like children</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat explicabo, quam iusto ex sint accusamus aliquid libero
            quia repellat consectetur inventore eaque! Praesentium adipisci
            doloribus saepe, omnis ducimus accusamus enim!</p>
          <button type='button' onClick={this.toggleModal}>Close</button>
        </Modal>)}
      </Container>
    );
  }
}
