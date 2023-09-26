import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books = [...state.books, payload];
    },
    removeBook: (state, { payload }) => {
      const id = payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

// console.log(bookSlice);
export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
