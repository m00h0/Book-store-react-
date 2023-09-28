import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from '../book/Book';
import BookForm from '../bookForm/BookForm';
import { getBooks } from '../../redux/features/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const allBooks = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getBooks('books'));
  }, [dispatch]);

  const entries = Object.entries(allBooks.books);

  return (
    <>
      {entries.map(([key, book]) => (
        <Book key={key} ItemId={key} book={book[0]} />
      ))}
      <BookForm />
    </>
  );
};

export default Books;
