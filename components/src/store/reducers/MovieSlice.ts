import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { errorMessage } from 'Constants';
import { sortItems } from 'Helpers';
import { Data, MovieState } from 'types';
import { fetchData } from './ActionCreators';

const initialState: MovieState = {
  movies: [],
  isLoading: false,
  error: '',
  searchValue: '',
  page: 1,
  totalPages: 0,
  sort: '',
  moviesCount: 20,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setPageValue(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setSortValue(state, action: PayloadAction<string>) {
      state.sort = action.payload;
      const cutMovies = state.movies.slice(0, state.moviesCount);
      state.movies = sortItems(state.sort, cutMovies);
    },
    setCountValue(state, action: PayloadAction<number>) {
      state.moviesCount = action.payload;
      const cutMovies = state.movies.slice(0, state.moviesCount);
      state.movies = sortItems(state.sort, cutMovies);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<Data>) => {
        state.isLoading = false;
        const cutMovies = action.payload.results.slice(0, state.moviesCount);
        state.movies = sortItems(state.sort, cutMovies);
        state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchData.rejected, (state) => {
        state.error = errorMessage;
        state.isLoading = false;
      })
      .addDefaultCase(() => {});
  },
});

export default movieSlice.reducer;
