import s from './ContactForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const ContactForm = () => {
  const orderSchema = Yup.object().shape({
    login: Yup.string().min(3).max(50).required('this field is required'),
    password: Yup.string().min(3).max(50).required('this field is required'),
  });

  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    const newContact = {
      // id: nanoid(),
      name: values.login,
      number: values.password,
    };
    // додав 2) додаємо в діспатч фввКонтакт (відправка на бекенд)
    dispatch(addContact(newContact)); // Через dispatch використовуємо addContacts і передаємо туди newContact
    // console.log(values);

    // console.log('State:', store.getState());
    // console.log('New Contact Added:', newContact);
    // console.log('Redux State:', store.getState()); // Потрібен доступ до store
    options.resetForm();
  };

  return (
    <div>
      <h2 className={s.title}>Phonebook</h2>
      <div className={s.container}>
        <Formik
          initialValues={{ login: '', password: '' }}
          validationSchema={orderSchema}
          onSubmit={onSubmit}
        >
          <Form className={s.form}>
            <label className={s.input}>
              <span>Name</span>
              <Field type="text" name="login" />
              <ErrorMessage name="login" component="span" />
            </label>
            <label className={s.input}>
              <span>Number</span>
              <Field type="text" name="password" />
              <ErrorMessage name="password" component="span" />
            </label>
            <button type="submit">Add contact</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
