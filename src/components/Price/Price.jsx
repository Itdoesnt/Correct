import classNames from 'classnames';
import styles from './index.module.scss';
import { getDiscountPrice } from '../../helpers/price';

export const Price = ({ product, className }) => {
  const hasDiscount = !!product.discount;

  return (
    <div className={classNames(styles.root, className)}>
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
    </div>
  );
};
