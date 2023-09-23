import './bookForm.css';

function BookForm() {
  return (
    <div className="book-form-main">
      <p className="form-title">ADD NEW BOOK</p>
      <form className="book-form">
        <input className="form-book-title" placeholder="book-title" required />
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
}

export default BookForm;
