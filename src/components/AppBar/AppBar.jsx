import s from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';

import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div className={s.header}>
      <h3>Header</h3> {isLoggedIn && <div>Welcome, {user.email}</div>}
      <ul>
        <Navigation />
        {!isLoggedIn && <AuthNav />}
        {isLoggedIn && <UserMenu />}
      </ul>
    </div>
  );
};

export default AppBar;
