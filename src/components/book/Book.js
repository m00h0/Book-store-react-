import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import './book.css';

const Book = () => (
  <div className="book-item">
    <div className="book-main">
      <div className="book-details">
        <p className="book-type">action</p>
        <h2 className="book-title">the hunter game</h2>
        <p className="book-author">Suzanne Collins</p>
        <p className="book-author">action</p>
        <ul className="book-actions">
          <li className="book-action">
            <button type="button" className="comment-btn">
              Comments
            </button>
          </li>
          <li className="book-action">
            <button type="button" className="remove-btn">
              Remove
            </button>
          </li>
          <li className="book-action">
            <button type="button" className="edit-btn">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="book-completion">
        <div className="pourcentage-icon">
          <AiOutlineLoading3Quarters size="4em" color="#4386bf" />
        </div>
        <div className="pourcentage-completed">
          <p className="pourcentage-number">64%</p>
          <p className="pourcentage-text">completed</p>
        </div>
        <div className="line" />
      </div>
      <div className="book-update">
        <p className="current-chapter">Current Chapter</p>
        <p className="current-lesson">Chapter 17</p>
        <button type="button" className="updateButton">
          Update progress
        </button>
      </div>
    </div>
  </div>
);

export default Book;
