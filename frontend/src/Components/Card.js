import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Card() {

    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem('cart')) || [];
    });


    const [total, setTotal] = useState(0);


    useEffect(() => {
        const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(newTotal);
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('cartTotal', newTotal);
    }, [cart]);


    const increaseQuantity = (id) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };


    const decreaseQuantity = (id) => {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };


    const removeItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };


    const proceedToCheckout = () => {
        window.location.href = '/payment';
    };

    return (
        <>
            <main className="carthtml">
                <h1>Your Cart</h1>
                <hr />
                <div className="carthtml1">
                    <div id="cart-items">
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            cart.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <h2>{item.title}</h2>
                                    <p>Price: {item.price}/-</p>
                                    <p>
                                        Quantity:
                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                        {item.quantity}
                                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                                    </p>
                                    <button onClick={() => removeItem(item.id)}>Remove</button>
                                </div>
                            ))
                        )}
                    </div>
                    <h2>Total: <span id="cart-total">{total}</span>/-</h2>
                    <Link to='/payment'>
                    <button id="checkout-btn" onClick={proceedToCheckout}>Proceed to Payment</button>
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Card;
