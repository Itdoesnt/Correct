import { createSlice } from '@reduxjs/toolkit';

const LS_KEY = 'userToken';

const storage = {
  get: () => localStorage.getItem(LS_KEY),
  set: (value) => localStorage.setItem(LS_KEY, value),
  delete: () => localStorage.removeItem(LS_KEY),
};

const slice = createSlice({
  name: 'auth',
  initialState: {
    token: storage.get(),
  },
  reducers: {
    set: (state, { payload }) => {
      state.token = payload;
      storage.set(payload);
    },
    remove: (state) => {
      state.token = '';
      storage.delete();
    },
  },
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authSelectors = {
  token: (state) => state.auth.token,
};
