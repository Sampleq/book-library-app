import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books-OLD_WAY/reducer';
import filterReducer from './slices/filterSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
  },
});

export default store;
