import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CamperList from '../../components/CamperList/CamperList';
import FavoritesFromUrl from '../../redux/favoriteSlice';
import {
  selectCampers,
  selectFavorites,
  selectIsLoading,
  selectError,
} from '../../redux/selectors';
import Loader from '../../components/Loader/Loader';
import commonModuleCss from '../../common.module.css';
import css from './favorites.module.css';

const Favorites = () => {
  FavoritesFromUrl();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/catalog');
  };

  const favorites = useSelector(selectFavorites);
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const favoriteCampers = campers.filter(({ _id }) => favorites.includes(_id));

  useEffect(() => {
    if (error) {
      navigate('/error');
    }
  }, [error, navigate]);

  if (isLoading) return <Loader />;
  if (!favoriteCampers.length)
    return (
      <div className={css.noCampersContainer}>
        <h1 className={css.noCampersText}>Choose what you like</h1>
        <button
          className={`${commonModuleCss.bookingFormButton} ${css.tripButton}`}
          onClick={handleButtonClick}
        >
          Let's go
        </button>
      </div>
    );

  return (
    <div className={css.container}>
      <CamperList campers={favoriteCampers} />
    </div>
  );
};

export default Favorites;
