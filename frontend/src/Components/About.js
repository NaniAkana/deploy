import React from 'react'
import Navbar from './Navbar';
import about from './images/aboutloo.jpg'
import Footer from './Footer';

function About() {
  return (
    <>
  <div class="headimg headimg4">
        <h1 >About Us</h1>
    </div>
    <div class="card3">
        <div class="card1">
            <p>About Us</p>
            <hr></hr>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        </div>
        <div class="card2">
            <img src={about} alt=""/>
        </div>
    </div>
    <div class="card4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, minima reprehenderit explicabo voluptatibus nisi cupiditate tenetur. At beatae, quae eum, non pariatur voluptate totam facilis, saepe minima ratione quisquam obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ex mollitia molestiae nam inventore vitae atque soluta similique voluptas adipisci! Fugiat beatae doloribus quibusdam aut quae mollitia reprehenderit modi accusantium!
    </div>
    <Footer/>
      </>
  )
}

export default About