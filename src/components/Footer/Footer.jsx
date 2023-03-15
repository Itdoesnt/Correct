import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export const Footer = ({ className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.block}>
        <Link to={'/'} className={styles.logo}>
          DOG FOOD
        </Link>
      </div>
      <div className={styles.block}>
        <Link to={'/'} className={styles.link}>
          Каталог
        </Link>
        <Link to={'/'} className={styles.link}>
          Акции
        </Link>
        <Link to={'/'} className={styles.link}>
          Новости
        </Link>
        <Link to={'/'} className={styles.link}>
          Отзывы
        </Link>
      </div>
      <div className={styles.block}>
        <Link to={'/'} className={styles.link}>
          Оплата и доставка
        </Link>
        <Link to={'/'} className={styles.link}>
          Часто спрашивают
        </Link>
        <Link to={'/'} className={styles.link}>
          Обратная связь
        </Link>
        <Link to={'/'} className={styles.link}>
          Контакты
        </Link>
      </div>
      <div className={styles.block}>
        <Link to={'/'} className={styles.link}>
          Мы на связи
        </Link>
        <Link to={'/'} className={styles.link}>
          8 999 00-00-00
        </Link>
        <Link to={'/'} className={styles.link}>
          example@mail.ru
        </Link>
      </div>
    </div>
  );
};
