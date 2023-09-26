import { useState } from 'react';
import './bookForm.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/features/books/booksSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const formSubmit = (e) => {
    e.preventDefault();
    const book = {
      title,
    };
    dispatch(addBook(book));
  };
  return (
    <div className="book-form-main">
      <p className="form-title">ADD NEW BOOK</p>
      <form className="book-form" onSubmit={formSubmit}>
        <input
          className="form-book-title"
          placeholder="book-title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <select className="book-categories">
          <option>Category</option>
          <option>Action</option>
          <option>Economy</option>
          <option>Science Fiction</option>
        </select>
        <button className="form-btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default BookForm;
