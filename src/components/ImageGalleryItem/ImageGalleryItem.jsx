import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { ImageGalleryItems, ImageGalleryItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component{

  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }.isRequired;

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
