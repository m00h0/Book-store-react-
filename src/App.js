import { Route, Routes } from 'react-router-dom';
import Books from './components/books/Books';
import Categories from './components/categories/Categories';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;