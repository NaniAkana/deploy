import React from 'react';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import './components.css';

function Footer() {
  return (
    <div>
         <div class="footer">
        <div class="footer1">
            <h1><Link to='/contact'>Let's Connect</Link></h1>
            
            
        </div>
        <div class="hr">
            <hr/>
        </div>
                <div class="footer2">
            <div class="footer3">
                <img src={logo} alt=""/>
            </div>
            <div class="footer4">
                
                <h5>Address <hr/>Hyderabad, Telangana <br/><br/> <a href="tel:+919392484316" > +91 9392484316</a></h5>
            </div>
            <div class="footer5">
                <h6>Useful Links <hr/><br/><Link to="/home">Home</Link><br/><br/><Link to="/about">About</Link><br/><br/><Link to="/categories">Categories</Link><br/><br/><Link to="/bestseller">Best Sellers</Link>
                    <br/><br/><Link to="/contact">Contact Us</Link></h6>

            </div>
        </div>

    </div>
    </div>
  )
}

export default Footer