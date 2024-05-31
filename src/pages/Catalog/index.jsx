import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCamper } from '../../api/api';
import CamperList from '../../components/CamperList/CamperList';
import { Button } from '../../components/Button/Button';
import { selectCampers, selectIsLoading, selectError } from 'store/selectors';
import { resetPage, incrementPage } from '../../store/camperSlice';
import Filters from './Filters';
import Loader from 'components/Loader/Loader';
import sprite from '../../image/icons/sprite.svg';
import commonModuleCss from '../../common.module.css';
import css from './catalog.module.css';

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(state => state.camper.page);
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    location: '',
    details: [],
    form: '',
    transmission: '',
  });
  const [activeFilters, setActiveFilters] = useState(filters);
  const [loadMore, setLoadMore] = useState(true);
  const limit = 4;

  useEffect(() => {
    const fetchData = async () => {
      const result = await dispatch(
        fetchCamper({ page, limit, filters: activeFilters })
      );
      if (result.payload.length < limit) {
        setLoadMore(false);
      }
    };

    fetchData();
  }, [dispatch, page, limit, activeFilters]);

  useEffect(() => {
    if (error) {
      navigate('/error');
    }
  }, [error, navigate]);

  const handleFilterChange = ({ target: { name, value, type, checked } }) => {
    setFilters(prev => {
      const newFilters = { ...prev };

      if (type === 'checkbox') {
        if (name === 'transmission') {
          newFilters.transmission = checked ? value : '';
        } else {
          newFilters.details = checked
            ? [...prev.details, value]
            : prev.details.filter(detail => detail !== value);
        }
      } else if (type === 'radio') {
        newFilters.form = value;
      } else {
        newFilters[name] = value;
      }

      return newFilters;
    });
  };

  const handleSearch = () => {
    dispatch(resetPage());
    setLoadMore(true);
    setActiveFilters(filters);
    dispatch(fetchCamper({ page: 1, limit, filters }));
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleLoadMore = async () => {
    dispatch(incrementPage());
    dispatch(fetchCamper({ page: page + 1, limit, filters: activeFilters }));
  };

  if (isLoading) return <Loader />;
  return (
    <div className={css.catalogSection}>
      <div className={css.catalogWrapper}>
        <section className={css.catalogLeft}>
          <p className={css.catalogLocationItem}>Location</p>
          <div className={css.catalogInputWrapper}>
            <svg className={commonModuleCss.icon}>
              <use href={`${sprite}#map_pin`} />
            </svg>
            <input
              className={css.catalogInput}
              type="text"
              name="location"
              placeholder="Kyiv, Ukraine"
              value={filters.location}
              onChange={handleFilterChange}
              onKeyDown={handleKeyDown}
            />
          </div>

          <p className={css.catalogFilterItem}>Filters</p>
          <Filters filters={filters} handleFilterChange={handleFilterChange} />
          <button
            className={`${commonModuleCss.bookingFormButton} ${css.catalogSearchBtn}`}
            onClick={handleSearch}
          >
            Search
          </button>
        </section>

        <section className={css.catalogRight}>
          <CamperList campers={campers} />
          <div>
            {loadMore && <Button onClick={handleLoadMore}>Load More</Button>}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Catalog;
