import styles from './index.module.scss';
import * as api from '../../api';
import { useQuery } from 'react-query';
import { Loading } from '../Loading/Loading';
import { authSelectors } from '../../store/auth';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { urls } from '../../router/paths';
import { cartSelectors } from '../../store/cart';
import { CartItem } from '../CartItem/CartItem';
import { useSignIn } from '../../hooks/signin';

export const Cart = () => {
  const token = useSelector(authSelectors.token);
  const ids = useSelector(cartSelectors.selectIds);
  useSignIn();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['cart', ids],
    queryFn: () => api.getProductsByIds({ ids, token }),
  });

  if (isLoading) {
    return <Loading className={styles.root} />;
  }

  if (isError) {
    return <div className={styles.root}>Ошибка загрузки</div>;
  }

  if (isSuccess) {
    return (
      <div className={styles.root}>
        {!ids.length && (
          <div className={styles.empty}>
            <div>Корзина пуста</div>
            <Link to={urls.CATALOG}>В каталог</Link>
            <Link to={urls.PROFILE}>Мой профиль</Link>
          </div>
        )}
        {!!ids.length && (
          <div className={styles.items}>
            {data.map((product) => (
              <CartItem
                key={product._id}
                product={product}
                className={styles.item}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
};
