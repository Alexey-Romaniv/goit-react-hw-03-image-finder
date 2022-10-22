import s from '../../styles.module.css';

export const ImageGalleryItem = ({ id, image, largeImage }) => {
  return (
    <li key={id} className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItem_image}
        src={image}
        alt=""
        data-url={largeImage}
      />
    </li>
  );
};
