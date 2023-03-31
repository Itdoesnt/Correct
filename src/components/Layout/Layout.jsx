import styles from './index.module.scss';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { useSignIn } from '../../hooks/signin';

export const Layout = () => {
  useSignIn();

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
