import css from '../../pages/Catalog/catalog.module.css';
import sprite from '../../image/icons/sprite.svg';

const Input = ({
  type,
  id,
  name,
  value,
  checked,
  onChange,
  label,
  icon,
}) => (
  <div className={css.catalogSideGroup}>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className={css.checkboxInput}
    />
    <label
      htmlFor={id}
      className={`${css.checkboxLabel} ${
        checked ? css.active : ''
      }`}
    >
      <div className={css.checkboxSquare}>
        <svg
          className={
            type === 'radio'
              ? css.catalogInputIconVan
              : css.catalogInputIcon
          }
        >
          <use href={`${sprite}#${icon}`} />
        </svg>
      </div>
      <p className={css.catalogSideP}>{label}</p>
    </label>
  </div>
);

export default Input;
