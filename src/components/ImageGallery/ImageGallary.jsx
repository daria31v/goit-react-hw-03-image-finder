import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallary.styled';
// Список карток зображень. Створює DOM-елемент наступної структури.
export const ImageGallery = ({images }) => {
    return <ImageGalleryList>
        {images.map(img => {
            return <ImageGalleryItem key={img.id} image={img} />
      })}
  </ImageGalleryList>;
};

// 