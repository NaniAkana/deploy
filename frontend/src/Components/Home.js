import { Link } from 'react-router-dom';
import "./components.css";

import horror from './images/horror.png';
import bio from './images/bio.png';
import romantic from './images/romantic.jpg';
import mystery from './images/mystery.jpeg';
import thriller from './images/thriller.jpg';
import stories from './images/fan.jpg'
import choose from './images/why choose.avif';
import Footer from './Footer';





function Home() {
    return (
        <>
            <div className="home">
                <div class="matter">
                    <h1>Discover Your Next Favorite Book</h1>
                    <p>Thousands of e-books at your fingertips</p>
                    <button class="matter-btn"><Link to="/categories">Browse Collection</Link></button>
                </div>

            </div>
            <div class="categorie">
                <h1>Categories</h1>
                <hr />
                <div class="categ">
                    <div class="container text-center">
                        <div class="row row-cols">
                            <div class="col btn">
                                <Link to="/categories">
                                    <img src={horror} alt="" />
                                    <h2>horror</h2>
                                </Link>
                            </div>
                            <div class="col btn">
                                <Link to="/categories">
                                    <img src={bio} alt="" />
                                    <h2>Biography</h2>
                                </Link>
                            </div>
                            <div class="col btn">
                                <Link to="/categories">
                                    <img src={romantic} alt="" />
                                    <h2>romantic</h2>
                                </Link>
                            </div>
                            <div class="col btn">
                                <Link to="/categories">
                                    <img src={mystery} alt="" />
                                    <h2>mystery</h2>
                                </Link>
                            </div>
                            <div class="col btn">
                                <Link to="/categories">
                                    <img src={thriller} alt="" />
                                    <h2>Thriller</h2>
                                </Link>
                            </div>
                            <div class="col btn">
                                <Link to="/categories">
                                    <img src={stories} alt="" />
                                    <h2>Stories</h2>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="choose">
                <div class="choose1">
                    <img src={choose} alt="" />
                </div>
                <div class="choose2">
                    <p>WHY CHOOSE US</p>
                    <hr />
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <br />
                    <br />
                    <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit sunt incidunt rem totam dolores eius aperiam asperiores inventore est numquam? Harum commodi delectus <Link to="/about">Click Here</Link></h5>

                </div>
            </div>
            <Footer/>


        </>
    );
}

export default Home;
