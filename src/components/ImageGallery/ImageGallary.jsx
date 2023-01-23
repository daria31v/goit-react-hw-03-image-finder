import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallary.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({images }) => {
    return <ImageGalleryList>
        {images.map(img => {
            return <ImageGalleryItem key={img.id} image={img} />
      })}
  </ImageGalleryList>;
};


ImageGallery.poropTypes = {
    images: PropTypes.array.isRequired
}.isRequired