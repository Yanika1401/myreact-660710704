//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Import Components
//import Footer from './components/Footer';
import Navbar from './components/Navbar';

// Import Pages
import HomePage from './pages/HomePage';
//import BookListPage from './pages/BookListPage';
//import BookDetailPage from './pages/BookDetailPage';
//import CategoryPage from './pages/CategoryPage';
//import AboutPage from './pages/AboutPage';
//import ContactPage from './pages/ContactPage';
import NotFound from './components/NotFound';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App() {
  return (
    <div className="App">
      {/* Navigation Bar - แสดงในทุกหน้า */}
      <Navbar />
      
      {/* Main Content - เปลี่ยนตาม route */}
      <main className="main-content">
        <Routes>
          {/* หน้าแรก - แสดงหนังสือแนะนำ */}
          <Route path="/" element={<HomePage />} />
          
          {/* หน้ารายการหนังสือทั้งหมด */}
          {/*<Route path="/books" element={<BookListPage />} />*/}
          
          {/* หน้ารายละเอียดหนังสือ - ใช้ dynamic parameter */}
          {/*<Route path="/books/:bookId" element={<BookDetailPage />} />*/}
          
          {/* หน้าหมวดหมู่ - ใช้ dynamic parameter */}
          {/*<Route path="/category/:categoryId" element={<CategoryPage />} />*/}
          
          {/* หน้าเกี่ยวกับเรา */}
          {/*<Route path="/about" element={<AboutPage />} />*/}
          
          {/* หน้าติดต่อ */}
          {/*<Route path="/contact" element={<ContactPage />} />*/}
          
          {/* หน้า 404 - สำหรับ URL ที่ไม่มีอยู่ */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      {/* Footer - แสดงในทุกหน้า */}
      {/*<Footer />*/}
    </div>
  );
}

export default App;
