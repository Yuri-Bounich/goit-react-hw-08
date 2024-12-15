import { Field, Formik, Form } from 'formik';
import { login } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import { Navigate } from 'react-router-dom';
import s from './LoginForm.module.css';

const LoginForm = () => {
  const isLogisLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    // console.log('Form values:', values);
    dispatch(login(values));
    options.resetForm();
  };
  const initialValues = {
    email: '',
    password: '',
  };

  if (isLogisLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div className={s.wrapper}>
      <h2>LoginForm</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field name="email" placeholder="Enter email" />
          <Field name="password" type="password" placeholder="Enter pass" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
