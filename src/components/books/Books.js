import { useSelector } from 'react-redux';
import Book from '../book/Book';
import BookForm from '../bookForm/BookForm';

const Books = () => {
  const allBooks = useSelector((store) => store.books);
  return (
    <>
      {allBooks.books.map((book) => (
        <Book key={book.itemId} book={book} />
      ))}
      <BookForm />
    </>
  );
};

export default Books;
