import { Outlet } from 'react-router-dom';
import AppBar from './Appbar/Appbar';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
