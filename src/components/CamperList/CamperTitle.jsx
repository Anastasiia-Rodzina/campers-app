import css from './camperList.module.css';
import commonModuleCss from '../../common.module.css';
import sprite from '../../image/icons/sprite.svg';

const CamperTitle = ({ name, price, isFavorite, onToggleFavorite }) => (
  <div className={css.camperTitle}>
    <h2 className={commonModuleCss.formHeader}>{name}</h2>
    <div className={css.camperTitleHeartGroup}>
      <h2 className={commonModuleCss.formHeader}>€{price.toFixed(2)}</h2>
      <button
        className={css.transparentButton}
        onClick={onToggleFavorite}
      >
        <svg
          className={`${css.iconDef} ${isFavorite ? css.red : ''}`}
        >
          <use href={`${sprite}#heart`} />
        </svg>
      </button>
    </div>
  </div>
);

export default CamperTitle;
