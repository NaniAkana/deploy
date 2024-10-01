
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './Components/Home';
import { useState } from 'react';
import RefreshHandler from './RefreshHandler';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Categories from './Components/Categories';
import Bestseller from './Components/Bestseller';
import Card from './Components/Card';
import Payment from './Components/Payment';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <HashRouter >
        <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route path="/categories" element={<PrivateRoute element={<Categories/>} />} />
          <Route path="/bestseller" element={<PrivateRoute element={<Bestseller/>} />} />
          <Route path="/contact" element={<PrivateRoute element={<Contact />} />} />
          <Route path="/about" element={<PrivateRoute element={<About />} />} />
          <Route path="/card" element={<PrivateRoute element={<Card/>} />} />
          <Route path="/payment" element={<PrivateRoute element={<Payment/>} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

const NavbarComponent = () => {
  const location = useLocation();
  const hiddenRoutes = ['/login', '/signup']; 
  const isHidden = hiddenRoutes.includes(location.pathname);

  return isHidden ? null : <Navbar />;
};

export default App;
