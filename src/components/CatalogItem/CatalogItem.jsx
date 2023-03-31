import classNames from 'classnames';
import styles from './index.module.scss';
import { cartActions, cartSelectors } from '../../store/cart';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { urls } from '../../router/paths';
import { Price } from '../Price/Price';

export const CatalogItem = ({ className, product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inCart = useSelector(cartSelectors.itemById(product._id));

  const onAdd = (product) => {
    if (inCart) {
      navigate(urls.CART);
    } else {
      dispatch(cartActions.increment(product));
    }
  };

  return (
    <div className={classNames(styles.root, className)}>
      <img className={styles.pic} src={product.pictures} alt="" />
      <div className={styles.content}>
        <Price product={product} />
        <div className={styles.name} title={product.name}>
          {product.name}
        </div>
        <div className={styles.stock}>{product.stock} шт</div>
        <button
          className={classNames(styles.button, { [styles.inCart]: !!inCart })}
          onClick={() => onAdd(product)}
        >
          {inCart ? 'Перейти' : 'В корзину'}
        </button>
      </div>
    </div>
  );
};
