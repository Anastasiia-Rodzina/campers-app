import sprite from '../../image/icons/sprite.svg';
import css from './camperModal.module.css';
import commonModuleCss from '../../common.module.css';

const ModalHeader = ({ name, onClose }) => (
  <div>
    <button className={css.closeButton} onClick={onClose}>
      <svg className={css.icon}>
        <use href={`${sprite}#rating`} />
      </svg>
    </button>
    <h2 className={`${css.modalFormHeader} ${commonModuleCss.formHeader}`}>
      {name}
    </h2>
  </div>
);

export default ModalHeader;
