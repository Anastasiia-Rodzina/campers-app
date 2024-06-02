import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setFavorites } from './camperSlice';

const FavoritesFromUrl = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const favoritesFromUrl = searchParams.get('favorites');
    if (favoritesFromUrl) {
      const favoriteIds = favoritesFromUrl.split(',');
      dispatch(setFavorites(favoriteIds));
    }
  }, [location.search, dispatch]);
};

export default FavoritesFromUrl;
