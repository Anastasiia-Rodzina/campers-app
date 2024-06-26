import css from './camperModal.module.css';

const ModalDetails = ({ details }) => (
  <div>
    <p className={css.modalDetailsTitle}>Vehicle details</p>
    <ul className={css.modalDetails}>
      <li className={css.modalDetailsItem}>
        <span>Form:</span> <span>{details.form}</span>
      </li>
      <li className={css.modalDetailsItem}>
        <span>Length:</span> <span>{details.length}</span>
      </li>
      <li className={css.modalDetailsItem}>
        <span>Width:</span> <span>{details.width}</span>
      </li>
      <li className={css.modalDetailsItem}>
        <span>Height:</span> <span>{details.height}</span>
      </li>
      <li className={css.modalDetailsItem}>
        <span>Tank:</span> <span>{details.tank}</span>
      </li>
      <li className={css.modalDetailsItem}>
        <span>Consumption:</span> <span>{details.consumption}</span>
      </li>
    </ul>
  </div>
);

export default ModalDetails;
