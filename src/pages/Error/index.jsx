import { useNavigate } from 'react-router-dom';
import commonModuleCss from '../../common.module.css';
import css from './error.module.css';

const Error = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <section className={css.homeWrapper}>
      <div className={css.overlay}></div>
      <div className={css.homeContent}>
        <h1 className={css.homeTitle}>Something is wrong </h1>

        <button
          className={`${commonModuleCss.bookingFormButton} ${css.tripButton}`}
          onClick={handleButtonClick}
        >
          Let's go
        </button>
      </div>
    </section>
  );
};

export default Error;
