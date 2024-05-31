import css from './camperModal.module.css';

const ModalImageContainer = ({ images, alt }) => (
  <div className={css.modalImgContainer}>
    {images.slice(0, 3).map((image, index) => (
      <img key={index} src={image} alt={alt} className={css.modalImg} />
    ))}
  </div>
);

export default ModalImageContainer;
