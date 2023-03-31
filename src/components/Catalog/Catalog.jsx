import styles from './index.module.scss';
import * as api from '../../api';
import { useQuery } from 'react-query';
import { Loading } from '../Loading/Loading';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { authSelectors } from '../../store/auth';
import { catalogSelectors } from '../../store/catalog';
import { useSelector } from 'react-redux';
import { useSignIn } from '../../hooks/signin';

export const Catalog = () => {
  const token = useSelector(authSelectors.token);
  const search = useSelector(catalogSelectors.search);

  const { isSuccess, isLoading, isError, data } = useQuery(
    ['products', search],
    () => api.searchProducts({ token, search })
  );

  useSignIn();

  if (isLoading) {
    return <Loading className={styles.root} />;
  }

  if (isError) {
    return <div className={styles.root}>Ошибка загрузки</div>;
  }

  if (isSuccess) {
    return (
      <div className={styles.root}>
        <div className={styles.found}>Найдено: {data.length} товаров</div>

        <div className={styles.items}>
          {data.map((product) => (
            <CatalogItem
              key={product._id}
              product={product}
              className={styles.item}
            />
          ))}
        </div>
      </div>
    );
  }
};
