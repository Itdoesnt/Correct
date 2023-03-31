import {
  createSlice
} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
  },
  reducers: {
    increment(state, {
      payload
    }) {
      const id = payload._id;
      const prev = state.items[id] || 0;
      state.items[id] = prev + 1;
    },

    decrement(state, {
      payload
    }) {
      const id = payload._id;
      const prev = state.items[id] || 0;
      state.items[id] = prev - 1;
    },

    remove(state, {
      payload
    }) {
      const id = payload._id;

      const {
        [id]: _,
        ...other
      } = state.items;
      state.items = other;
    },
  },
});

export const cartReducer = slice.reducer;
export const cartActions = slice.actions;
export const cartSelectors = {
  itemById: (id) => (state) => state.cart.items[id],
  selectIds: (state) => Object.keys(state.cart.items),
  uniqueCount: (state) => cartSelectors.selectIds(state).length,
};