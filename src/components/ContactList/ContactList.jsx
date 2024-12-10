import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  if (!contacts.length) {
    return <p>No contacts available</p>; // Повідомлення, якщо список порожній
  }
  return (
    <div className={s.cotainer}>
      <ul className={s.block}>
        {contacts.map(item => (
          <Contact {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
