import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    selectedMovies: []
  },
  reducers: {
    addMovieToList: (state, action) => {
      state.selectedMovies.push(action.payload);
    }
  }
});

export const { addMovieToList } = movieSlice.actions;
export default movieSlice.reducer;
