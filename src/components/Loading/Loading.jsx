import classNames from 'classnames';
import styles from './index.module.scss';

export const Loading = ({ className }) => {
  return <div className={classNames(styles.root, className)}>Loading...</div>;
};
