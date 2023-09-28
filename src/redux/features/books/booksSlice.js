import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JutEyYwvuMkLSkiEPwum/books';

const initialState = {
  books: {},
  isLoading: false,
  error: null,
};

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (payload, thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book, thunkAPI) => {
    try {
      await axios.post(url, book);
      const respget = await axios.get(url);
      return respget.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (itemId, thunkAPI) => {
    try {
      await axios.delete(`${url}/${itemId}`);
      const respget = await axios.get(url);
      return respget.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.books = payload;
    },
    [getBooks.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addBook.pending]: (state) => {
      state.isLoading = true;
    },
    [addBook.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.books = payload;
    },
    [addBook.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteBook.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteBook.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.books = payload;
    },
    [deleteBook.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default booksSlice.reducer;
