import { useNavigate } from 'react-router-dom';
import css from './home.module.css';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/catalog');
  };

  return (
    <section className={css.homeWrapper}>
      <div className={css.overlay}></div>
      <div className={css.homeContent}>
        <h1 className={css.homeTitle}>Rent a comfort for your trip</h1>

        <button className={css.tripButton} onClick={handleButtonClick}>
          Let's go
        </button>
      </div>
    </section>
  );
};

export default Home;
