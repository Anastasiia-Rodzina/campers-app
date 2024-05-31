import DatePicker from 'react-datepicker';
import sprite from '../../image/icons/sprite.svg';
import 'react-datepicker/dist/react-datepicker.css';
import css from './camperModal.module.css';
import commonModuleCss from '../../common.module.css';

const ModalForm = ({ form, errors, handleSubmit, setForm }) => {
  const handleChange = ({ target: { name, value } }) => {
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className={css.bookingForm}>
      <p className={`${css.modalFormBooking} ${commonModuleCss.detailsTitle}`}>
        Book your campervan now
      </p>
      <p>Stay connected! We are always ready to help you.</p>
      <form className={css.bookingFormFlex} onSubmit={handleSubmit}>
        <label className={css.bookingFormInput}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>
        <label>
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className={css.bookingFormDateWrapper}>
          <DatePicker
            selected={form.bookingDate}
            onChange={date => setForm({ ...form, bookingDate: date })}
            dateFormat="dd/MM/yyyy"
            placeholderText="Booking date"
            className={css.bookingFormDate}
            wrapperClassName={css.bookingFormDateWrapper}
            required
          />
          <svg className={css.bookingFormDateIcon}>
            <use href={`${sprite}#Button-20x20-calendar`} />
          </svg>
          {errors.bookingDate && (
            <p className={css.error}>{errors.bookingDate}</p>
          )}
        </label>
        <label>
          <textarea
            name="comment"
            placeholder="Comment"
            value={form.comment}
            onChange={handleChange}
          ></textarea>
        </label>
        <button
          className={`${css.bookingFormButton} ${commonModuleCss.bookingFormButton}`}
          type="submit"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
