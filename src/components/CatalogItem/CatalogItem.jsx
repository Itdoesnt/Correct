import classNames from 'classnames';
import styles from './index.module.scss';
import { getDiscountPrice } from '../../helpers/price';

export const CatalogItem = ({ className, product }) => {
  const hasDiscount = !!product.discount;

  return (
    <div className={classNames(styles.root, className)}>
      <img className={styles.pic} src={product.pictures} alt="" />
      <div className={styles.content}>
        <div className={styles.price}>
          <span
            className={classNames(styles.original, {
              [styles.hasDiscount]: hasDiscount,
            })}
          >
            {product.price} ₽
          </span>
          {hasDiscount && (
            <span className={styles.discountPrice}>
              {getDiscountPrice(product)} ₽
            </span>
          )}
        </div>
        <div className={styles.name} title={product.name}>
          {product.name}
        </div>
        <div className={styles.stock}>{product.stock} шт</div>
        <button className={styles.button}>В корзину</button>
      </div>
    </div>
  );
};
