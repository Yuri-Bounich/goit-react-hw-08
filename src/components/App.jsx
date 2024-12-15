import '../index.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/HomePage/HomePage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshing } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshing());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              {' '}
              <ContactsPage />{' '}
            </PrivateRoute>
          }
        />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
