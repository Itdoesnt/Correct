import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth';
import { catalogReducer } from './catalog';
import persistState from 'redux-localstorage';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    catalog: catalogReducer,
  },
  enhancers: [persistState()],
});
