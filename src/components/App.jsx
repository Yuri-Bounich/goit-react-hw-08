import ContactForm from './ContactForm/ContactForm';
import '../index.css';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import { selectLoading } from '../redux/selectors';

const App = () => {
  // запит 2) встановл діспатч та юзефект для виконання запиту після рендеру
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {loading && <h2>Loading.......</h2>}
      <ContactList />
    </div>
  );
};

export default App;
