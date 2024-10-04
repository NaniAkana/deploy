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
import storie1 from './images/akbar.jpg';
import storie2 from './images/jung.jpg';
import storie3 from './images/pancha.jpeg';
import storie4 from './images/tena.jpg';
import storie5 from './images/nethi kathaluu.jpg';
import romantic1 from './images/roomate experiment.jpg';
import romantic2 from './images/love deception.jpg';
import romantic3 from './images/set on you.jpeg';
import romantic4 from './images/to please a princess.jpg';
import romantic5 from './images/Pride-and-Protest.jpg';
import horror1 from './images/horrors of the night.jpg';
import horror2 from './images/black forest.jpg';
import horror3 from './images/night of terror.jpg';
import horror4 from './images/stephen king.webp';
import horror5 from './images/the fervor.jpeg';



import './components.css';
import './Responsive.css';
import Footer from './Footer';

function Categories() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [priceRange, setPriceRange] = useState([0, 1500]); // Default price range
  const [discountRange, setDiscountRange] = useState([0, 100]); // Default discount range

  const books = [
    { id: 1, img: bio1, title: 'George Washington Book', price: 290, discount: 10 },
    { id: 2, img: bio2, title: 'Albert Einstein Book', price: 910, discount: 20 },
    { id: 3, img: bio3, title: 'Mahatma Gandhi Book', price: 500, discount: 15 },
    { id: 4, img: bio4, title: 'APJ Abdul Kalam Book', price: 330, discount: 30 },
    { id: 5, img: bio5, title: 'Walt Disney Book', price: 690, discount: 50 },
    { id: 6, img: thriller1, title: "Don't Turn Around Book", price: 230, discount: 14 },
    { id: 7, img: thriller2, title: 'That Night Book', price: 480, discount: 55 },
    { id: 8, img: thriller3, title: 'The Silent Patient Book', price: 800, discount: 25 },
    { id: 9, img: thriller4, title: 'The Last Resort Book', price: 770, discount: 15 },
    { id: 10, img: thriller5, title: 'Stephen King Book', price: 720, discount: 36 },
    { id: 11, img: storie1, title: "Akbar Birbal Book", price: 130, discount: 17 },
    { id: 12, img: storie2, title: 'Jungle Book', price: 280, discount: 21},
    { id: 13, img: storie3, title: 'Panchantram Book', price: 830, discount: 23 },
    { id: 14, img: storie4, title: 'Tenali Raman Book', price: 370, discount: 7 },
    { id: 15, img: storie5, title: 'Neethi Kathalu Book', price: 120, discount: 5 },
    { id: 16, img: romantic1, title: "Roommate Experiment Book", price: 320, discount: 30 },
    { id: 17, img: romantic2, title: 'Love Deception Book', price: 159, discount: 15 },
    { id: 18, img: romantic3, title: 'Set On You Book', price: 456, discount: 41 },
    { id: 19, img: romantic4, title: 'To Please a Princess Book', price: 430, discount: 33 },
    { id: 20, img: romantic5, title: 'Pride and Protest Book', price: 90, discount: 23 },
    { id: 21, img: horror1, title: "horrors of the night", price: 320, discount: 15 },
    { id: 22, img: horror2, title: 'Black Forest Book', price: 159, discount: 23 },
    { id: 23, img: horror3, title: 'Night of Terror Book', price: 456, discount: 43 },
    { id: 24, img: horror4, title: 'Stephen King Book', price: 430, discount: 29 },
    { id: 25, img: horror5, title: 'The Fervor Book', price: 90, discount: 3 },
  ];

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

  const handlePriceChange = (e) => {
    const newPriceRange = [Number(e.target.value), priceRange[1]];
    setPriceRange(newPriceRange);
  };

  const handleDiscountChange = (e) => {
    const newDiscountRange = [Number(e.target.value), discountRange[1]];
    setDiscountRange(newDiscountRange);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.price >= priceRange[0] &&
      book.price <= priceRange[1] &&
      book.discount >= discountRange[0] &&
      book.discount <= discountRange[1]
  );

  return (
    <div>

      <div>
        <div className="headimg">
          <h1>Categories</h1>
        </div>
        <div className='sidebar1'>

          <div className="sidebar" >
            <h5>Filter by Price</h5>
            
            <span>Price: {priceRange[0]} - {priceRange[1]} Rs</span>
            <input
              type="range"
              min="0"
              max="1500"
              value={priceRange[0]}
              onChange={handlePriceChange}
            /><br />
           <br/>
            <h6>Filter by Discount</h6>
            <span>Discount: {discountRange[0]}% - {discountRange[1]}%</span>
            <input
              type="range"
              min="0"
              max="100"
              value={discountRange[0]}
              onChange={handleDiscountChange}
            /><br />
            
          </div>

          <div className="categories">
            <div style={{ margin: '20px' }}>
              <h1>Biography</h1>
              <hr />
              <div className="cate card-container">
                {filteredBooks.slice(0, 5).map((book) => (
                  <div className="card" style={{ width: '13rem' }} key={book.id} data-id={book.id}>
                    <img src={book.img} className="card-img-top" alt={book.title} />
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p className="price">{book.price}/-</p>
                      <p className="discount">Discount: {book.discount}%</p>
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
              <a href="#" className="btn view">
                View All <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>

            <div style={{ paddingTop: '100px', margin: '20px' }}>
              <h1>Thriller</h1>
              <hr />
              <div className="cate card-container">
                {filteredBooks.slice(5,10).map((book) => (
                  <div className="card" style={{ width: '13rem' }} key={book.id} data-id={book.id}>
                    <img src={book.img} className="card-img-top" alt={book.title} />
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p className="price">{book.price}/-</p>
                      <p className="discount">Discount: {book.discount}%</p>
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
              
              <a href="#" className="btn view">
                View All <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
            <div style={{ paddingTop: '100px', margin: '20px' }}>
              <h1>Stories</h1>
              <hr />
              <div className="cate card-container">
                {filteredBooks.slice(10,15).map((book) => (
                  <div className="card" style={{ width: '13rem' }} key={book.id} data-id={book.id}>
                    <img src={book.img} className="card-img-top" alt={book.title} />
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p className="price">{book.price}/-</p>
                      <p className="discount">Discount: {book.discount}%</p>
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
              
              <a href="#" className="btn view">
                View All <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
            <div style={{ paddingTop: '100px', margin: '20px' }}>
              <h1>Romantic</h1>
              <hr />
              <div className="cate card-container">
                {filteredBooks.slice(15,20).map((book) => (
                  <div className="card" style={{ width: '13rem' }} key={book.id} data-id={book.id}>
                    <img src={book.img} className="card-img-top" alt={book.title} />
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p className="price">{book.price}/-</p>
                      <p className="discount">Discount: {book.discount}%</p>
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
              
              <a href="#" className="btn view">
                View All <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
            <div style={{ paddingTop: '100px', margin: '20px' }}>
              <h1>Horror</h1>
              <hr />
              <div className="cate card-container">
                {filteredBooks.slice(20,25).map((book) => (
                  <div className="card" style={{ width: '13rem' }} key={book.id} data-id={book.id}>
                    <img src={book.img} className="card-img-top" alt={book.title} />
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p className="price">{book.price}/-</p>
                      <p className="discount">Discount: {book.discount}%</p>
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
              
              <a href="#" className="btn view">
                View All <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>

  );
}

export default Categories;
