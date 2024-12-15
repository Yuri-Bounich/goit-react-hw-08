import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import s from './RegistrationForm.module.css';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    // console.log('Form values:', values);
    dispatch(register(values))
      .unwrap()
      .then(res => {
        toast(`Welcome ${res?.user?.name}`);
        navigate('/contacts');
      })
      .catch(() => {
        toast.error('try again!');
      });
    options.resetForm();
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  return (
    <div className={s.wrapper}>
      <h2>RegistrationForm</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field name="name" placeholder="Enter name" />
          <Field name="email" placeholder="Enter email" />
          <Field name="password" type="password" placeholder="Enter pass" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
