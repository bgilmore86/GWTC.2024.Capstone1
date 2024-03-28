//store.js
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from './api';

// Create cart slice w/initial state of array
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },

  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },

  removeFromCart(state, action) {
      const index = state.cart.findIndex(item => item.id === action.payload.id);
      state.cart.splice(index, 1);
    }
  }
});

// Export cart actions 
export const { addToCart, removeFromCart } = cartSlice.actions;

// Export cart reducer
export const cartReducer = cartSlice.reducer;

// Create store
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartReducer
  },

  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;
