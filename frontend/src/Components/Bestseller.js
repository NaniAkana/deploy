import React, { useEffect, useState } from 'react';
import bio1 from './images/bio1.jpeg';
import bio2 from './images/bio2.jpeg';
import bio3 from './images/bio3.jpeg';
import bio4 from './images/bio4.jpeg';
import bio5 from './images/bio5.jpeg';
import Footer from './Footer';

function Bestseller() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  
  useEffect(() => {
    updateCartCount();
  }, [cart]);

  const handleAddToCart = (title, price) => {
    let id = title.toLowerCase().replace(/\s+/g, "-");
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        return [...prevCart];
      } else {
        return [...prevCart, { id, title, price, quantity: 1 }];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateCartCount = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").innerText = totalItems; // Assuming you have an element with this ID to display the count
  };

  return (
    <div>
      <div className="headimg headimg2">
        <h1>Best Sellers</h1>
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
              { id: 5, img: bio5, title: 'Walt Disney Book', price: 600 }
            ].map(book => (
              <div className="card" style={{ width: '13rem' }} key={book.id}>
                <img src={book.img} className="card-img-top" alt={book.title} />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="price">{book.price}/-</p>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(book.title, book.price)}
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

export default Bestseller;
