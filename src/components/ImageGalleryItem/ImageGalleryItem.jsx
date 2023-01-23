import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { ImageGalleryItems, ImageGalleryItemImage } from './ImageGalleryItem.styled';
// Компонент елемента списку із зображенням. Створює DOM-елемент наступної структури.

export class ImageGalleryItem extends Component{

  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(( prevState ) => ({
      showModal: !prevState.showModal,
    }));
  };

  
render(){
  const { webformatURL, largeImageURL } = this.props.image;
  const { showModal } = this.state;
  return (
    <>
    <ImageGalleryItems onClick={this.toggleModal}>
      <ImageGalleryItemImage src={webformatURL} alt="pictures" />
      </ImageGalleryItems>
      {showModal && (<Modal modalImage={largeImageURL} onClose={this.toggleModal}/>)}
      </>
      );
  }
}
