import '../index.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/HomePage/HomePage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';

const App = () => {
  // запит 2) встановл діспатч та юзефект для виконання запиту після рендеру
  // const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    // <div>
    //   <ContactForm />
    //   <SearchBox />
    //   {loading && <h2>Loading.......</h2>}
    //   <ContactList />
    // </div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
