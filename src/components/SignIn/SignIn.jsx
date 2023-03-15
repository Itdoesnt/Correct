import styles from './index.module.scss';
import * as api from '../../api';
import { useMutation } from 'react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import { urls } from '../../router/paths';

export const SignIn = () => {
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate, isError, isSuccess, data, error } = useMutation((data) =>
    api.signIn(data)
  );

  const onSubmit = (event) => {
    event.preventDefault();
    mutate(formValue);
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(authActions.set(data.token));
      navigate(urls.CATALOG);
    }
  }, [isSuccess]);

  return (
    <form className={styles.root} onSubmit={onSubmit}>
      <div className={styles.title}>SignIn</div>
      <input
        type="text"
        name="email"
        className={styles.control}
        placeholder="Email"
        onInput={onChange}
      />
      <input
        type="password"
        name="password"
        className={styles.control}
        placeholder="Password"
        onInput={onChange}
      />
      {isError && <div className={styles.error}>{error?.message}</div>}
      <button className={styles.submit} type="submit">
        Login
      </button>
    </form>
  );
};
