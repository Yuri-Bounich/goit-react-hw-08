import s from './Contact.module.css';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <div className={s.i}>
        <div>
          <FaUser /> {name}
        </div>
        <div>
          <FaPhoneAlt /> {number}
        </div>
      </div>
      {/* видал 2)  імпортуємо і прописуємо функцію видалення передаємо*/}
      {/*id позиції що треба видалити*/}
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;
