import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import userPic from '../../assets/user.png';
import signUpPic from '../../assets/signup.png';
import signInPic from '../../assets/signin.png';
import cartPic from '../../assets/cart.png';
import { authSelectors } from '../../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import { catalogActions, catalogSelectors } from '../../store/catalog';
import debounce from 'debounce';
import { urls } from '../../router/paths';
import { cartSelectors } from '../../store/cart';

export const Header = ({ className }) => {
  const token = useSelector(authSelectors.token);
  const search = useSelector(catalogSelectors.search);
  const dispatch = useDispatch();
  const countInCart = useSelector(cartSelectors.uniqueCount);

  const onInput = debounce((e) => {
    dispatch(catalogActions.search(e.target.value));
  }, 500);

  return (
    <div className={classNames(styles.root, className)}>
      <Link className={styles.logo} to={urls.CATALOG}>
        DOG FOOD
      </Link>
      {!!token && (
        <input
          type="text"
          placeholder="Search in catalog"
          className={styles.search}
          defaultValue={search}
          onInput={onInput}
        />
      )}
      <div className="actions">
        {!!token ? (
          <>
            <Link className={styles.button} to={urls.CART}>
              <img className={styles.user} src={cartPic} alt="" />
              {!!countInCart && (
                <div className={styles.counter}>{countInCart}</div>
              )}
            </Link>
            <Link className={styles.button} to={urls.PROFILE}>
              <img className={styles.user} src={userPic} alt="" />
            </Link>
          </>
        ) : (
          <>
            <Link className={styles.button} to={urls.SIGNUP} title={'Sign up'}>
              <img className={styles.user} src={signUpPic} alt="" />
            </Link>
            <Link className={styles.button} to={urls.SIGNIN} title={'Sign in'}>
              <img className={styles.user} src={signInPic} alt="" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
