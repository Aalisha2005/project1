import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice'; // Update with correct path

const store = configureStore({
  reducer: {
    movies: movieReducer
  }
});

export default store;
