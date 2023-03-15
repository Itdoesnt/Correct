import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'catalog',
  initialState: {
    search: '',
  },
  reducers: {
    search(state, { payload }) {
      state.search = payload;
    },
  },
});

export const catalogReducer = slice.reducer;
export const catalogActions = slice.actions;
export const catalogSelectors = {
  search: (state) => state.catalog.search,
};
