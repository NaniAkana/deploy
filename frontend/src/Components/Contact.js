import React from 'react'
import Footer from './Footer'

function Contact() {
  return (
    <div>
      <div class="headimg headimg3">
        <h1>Contact Us</h1>
      </div>
      <div class="contact">
        <div class="contact1">
          <h1><a href="tel:+919392484316">+91 9392484316</a></h1>
          <hr />
          <h6>Address </h6>
          <h1>
            <address>Hyderabad, Telangana</address>
          </h1>
          <hr />
          <h6>Email</h6>
          <h1 ><a href="mailto:naniakana567@gmail.com">naniakana567@gmail.com</a></h1>

        </div>
        <div class="contact2">
          <p>LET'S CHAT</p>
          <hr />
          <h1>SEND A MESSAGE</h1>
          <div class="form">
            <form action="">
              <label for=""> Your name:</label><br />
              <input type="text" required />
              <br /><br />
              <label for=""> Your email:</label><br />
              <input type="email" required />
              <br /><br />
              <label for=""> subject:</label><br />
              <input type="text" />
              <br /><br />
              <label for=""> Your name:</label><br />
              <textarea name="" id="" cols="50" rows="4"></textarea>
              <br /><br />
              <input type="submit" />
            </form>
          </div>

        </div>


      </div>
      <div class="iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.2770766428151!2d78.41526282519699!3d17.488593527709696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915b3c2a56b3%3A0x78309f445699b777!2sSanthi%20Nilayam%20sriram%20garu!5e1!3m2!1sen!2sin!4v1726643581526!5m2!1sen!2sin"
          width="100%" height="500px" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
      <Footer/>
    </div>
    
  )
}

export default Contact