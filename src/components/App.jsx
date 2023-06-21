import React, { useEffect } from 'react';

// import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom/dist';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { Contacts } from '../pages/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from './redux/auth/authSelector';
import { PrivateRoute } from './publicRoute/PrivateRoute';
import { PublicRoute } from './publicRoute/PublicRoute';
import { getUserThunk } from './redux/auth/authThunk';
import { UserMenu } from './Phonebook/UserMenu';

// const Home = lazy(() => import('../pages/Home'));
// const Movies = lazy(() => import('../pages/Movies'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Cast = lazy(() => import('../pages/Cast'));
// const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth) {
      dispatch(getUserThunk());
    }
  }, [dispatch, isAuth]);

  return (
    // <Suspense fallback={<div>Loading...</div>}>
    // {/* </Suspense> */}

    <>
      {isAuth ? (
        <UserMenu />
      ) : (
        <nav>
          <Link to={'/login'}>login</Link>
          <Link to={'/register'}>register</Link>
        </nav>
      )}
      <Routes>
        <Route path="/" element={<Navigate to={'/contacts'} />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>

        <Route path="/" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};
