import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(logout())}>Logout</button>;
};

export default UserMenu;
