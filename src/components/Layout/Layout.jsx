import styles from './index.module.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../store/auth';
import { urls } from '../../router/paths';

export const Layout = () => {
  const navigate = useNavigate();
  const token = useSelector(authSelectors.token);

  useEffect(() => {
    if (!token) {
      navigate(urls.SIGNIN);
    }
  }, [token]);

  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};
