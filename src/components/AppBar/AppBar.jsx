import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import clsx from 'clsx';
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={s.header}>
      <h3>Header</h3> {(isLoggedIn && navigator, (<div>{user.email}</div>))}
      <ul>
        <NavLink className={buildLinkClass} to="/">
          HomePage
        </NavLink>
        <NavLink className={buildLinkClass} to="/contacts">
          ContactsPage
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className={buildLinkClass} to="/register">
              Register
            </NavLink>
            <NavLink className={buildLinkClass} to="/login">
              Login
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <button onClick={() => dispatch(logout())}>Logout</button>
        )}
      </ul>
    </div>
  );
};

export default AppBar;
