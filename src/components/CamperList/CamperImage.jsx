import css from './camperList.module.css';

const CamperImage = ({ src, alt }) => (
  <div className={css.camperImgBox}>
    <img className={css.camperImg} src={src} alt={alt} />
  </div>
);

export default CamperImage;
