import {
  useSelector
} from 'react-redux';
import {
  authSelectors
} from '../store/auth';
import {
  useEffect
} from 'react';
import {
  useNavigate
} from 'react-router-dom';
import {
  urls
} from '../router/paths';

export const useSignIn = () => {
  const token = useSelector(authSelectors.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate(urls.SIGNIN);
    }
  }, [navigate, token]);
}