import { Link } from 'react-router-dom';
import { IoPersonSharp } from 'react-icons/io5';
import './header.css';

const Header = () => (
  <header className="header">
    <nav className="nav">
      <div className="navigation">
        <Link className="logo" to="/">
          Bookstore CMS
        </Link>
        <ul className="menu">
          <li className="list_item">
            <Link className="menu-link" to="/">
              Books
            </Link>
          </li>
          <li className="list_item">
            <Link className="menu-link" to="/categories">
              Categories
            </Link>
          </li>
        </ul>
      </div>
      <span className="account">
        <IoPersonSharp size="1em" color="#0290ff" />
      </span>
    </nav>
  </header>
);

export default Header;