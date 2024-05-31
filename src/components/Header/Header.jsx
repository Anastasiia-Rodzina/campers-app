import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './header.module.css';
import Loader from '../Loader/Loader';

const Header = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleComplete = () => setLoading(false);

    handleComplete();

    window.addEventListener('popstate', handleComplete);

    return () => {
      window.removeEventListener('popstate', handleComplete);
    };
  }, [location]);

  return (
    <header className={css.headerWrapper}>
      <nav className={css.headerNav}>
        {loading && <Loader />}
        <ul className={css.headerNav}>
          <li className={css.headerNavList}>
            <Link to="/" onClick={() => setLoading(true)}>
              Home
            </Link>
          </li>
          <li className={css.headerNavList}>
            <Link to="/catalog" onClick={() => setLoading(true)}>
              Catalog
            </Link>
          </li>
          <li className={css.headerNavList}>
            <Link to="/favorites" onClick={() => setLoading(true)}>
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
