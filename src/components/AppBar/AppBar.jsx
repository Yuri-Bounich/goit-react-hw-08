import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <div className={s.header}>
      <h3>Header</h3>{' '}
      <ul>
        <NavLink to="/">HomePage</NavLink>
        <NavLink to="/contacts">ContactsPage</NavLink>
      </ul>
    </div>
  );
};

export default AppBar;
