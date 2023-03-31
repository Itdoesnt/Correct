import styles from './index.module.scss';
import { useQuery } from 'react-query';
import * as api from '../../api';
import { Loading } from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { authActions, authSelectors } from '../../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import { urls } from '../../router/paths';
import { useSignIn } from '../../hooks/signin';

export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.token);

  const { isError, isLoading, isSuccess, data } = useQuery(['me', token], () =>
    api.getMe({ token })
  );

  useSignIn();

  if (isLoading) {
    return <Loading className={styles.root} />;
  }

  if (isError) {
    return <div className={styles.root}>Ошибка загрузки</div>;
  }

  const onLogout = () => {
    dispatch(authActions.remove());
    navigate(urls.SIGNIN);
  };

  if (isSuccess) {
    return (
      <div className={styles.root}>
        <div className={styles.row}>
          <img className={styles.avatar} src={data.avatar} alt="avatar" />
          <div className={styles.column}>
            <div className={styles.name}>{data.name}</div>
            <div className={styles.column}>
              <div>About: {data.about}</div>
              <div>Email: {data.email}</div>
              <button className={styles.logout} onClick={onLogout}>
                Выйти
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
