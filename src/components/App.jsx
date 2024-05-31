import { Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout/index';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/index'));
const Catalog = lazy(() => import('../pages/Catalog/index'));
const Favorites = lazy(() => import('../pages/Favorites/index'));
const Error = lazy(() => import('../pages/Error/index'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};
