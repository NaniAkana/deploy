import React, { useState, useEffect } from 'react';
import bio1 from './images/bio1.jpeg';
import bio2 from './images/bio2.jpeg';
import bio3 from './images/bio3.jpeg';
import bio4 from './images/bio4.jpeg';
import bio5 from './images/bio5.jpeg';
import thriller1 from './images/thriller1.webp';
import thriller2 from './images/thriler2.jpeg';
import thriller3 from './images/thriller3.jpg';
import thriller4 from './images/thriller4.webp';
import thriller5 from './images/thirller5.jpg';
import './components.css';
import './Responsive.css';
import Footer from './Footer';

function Categories() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }, [cart]);

  const updateCartCount = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').innerText = totalItems;
  };

  const addToCart = (title, price) => {
    const id = title.toLowerCase().replace(/\s+/g, '-');
    const existingItem = cart.find((item) => item.id === id);
    
    if (existingItem) {
      existingItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { id, title, price, quantity: 1 }]);
    }
  };

  return (
    <div>
      <div className="headimg">
        <h1>Categories</h1>
      </div>
      <div className="categories">
        <div style={{ margin: '20px' }}>
          <h1>Biography</h1>
          <hr />
          <div className="cate card-container">
            {[
              { id: 1, img: bio1, title: 'George Washington Book', price: 500 },
              { id: 2, img: bio2, title: 'Albert Einstein Book', price: 500 },
              { id: 3, img: bio3, title: 'Mahatma Gandhi Book', price: 500 },
              { id: 4, img: bio4, title: 'APJ Abdul Kalam Book', price: 700 },
              { id: 5, img: bio5, title: 'Walt Disney Book', price: 600 },
            ].map((book) => (
              <div className="card" style={{ width: '13rem' }} key={book.id} data-id={book.id}>
                <img src={book.img} className="card-img-top" alt={book.title} />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="price">{book.price}/-</p>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button 
                      className="btn btn-primary" 
                      onClick={() => addToCart(book.title, book.price)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="btn view">View All <i className="fa fa-long-arrow-right"></i></a>
        </div>

        <div style={{ paddingTop: '100px', margin: '20px' }}>
          <h1>Thriller</h1>
          <hr />
          <div className="cate card-container">
            {[
              { id: 6, img: thriller1, title: "Don't Turn Around Book", price: 500 },
              { id: 7, img: thriller2, title: 'That Night Book', price: 500 },
              { id: 8, img: thriller3, title: 'The Silent Patient Book', price: 500 },
              { id: 9, img: thriller4, title: 'The Last Resort Book', price: 500 },
              { id: 10, img: thriller5, title: 'Stephen King Book', price: 500 },
            ].map((book) => (
              <div className="card" style={{ width: '13rem' }} key={book.id} data-id={book.id}>
                <img src={book.img} className="card-img-top" alt={book.title} />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="price">{book.price}/-</p>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button 
                      className="btn btn-primary" 
                      onClick={() => addToCart(book.title, book.price)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="btn view">View All <i className="fa fa-long-arrow-right"></i></a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Categories;
