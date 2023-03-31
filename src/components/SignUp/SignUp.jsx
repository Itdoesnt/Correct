import styles from './index.module.scss';
import * as api from '../../api';
import { useMutation } from 'react-query';
import { useState } from 'react';
import { useSignIn } from '../../hooks/signin';

export const SignUp = () => {
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const { isError, mutate, error } = useMutation((data) => api.signUp(data));

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

  useSignIn();

  return (
    <form className={styles.root} onSubmit={onSubmit}>
      <div className={styles.title}>SignUp</div>
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
        Register
      </button>
    </form>
  );
};
