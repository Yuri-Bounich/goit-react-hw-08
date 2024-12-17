import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <nav>
      <NavLink className={buildLinkClass} to="/">
        HomePage
      </NavLink>
      <NavLink className={buildLinkClass} to="/contacts">
        ContactsPage
      </NavLink>
    </nav>
  );
};

export default Navigation;
