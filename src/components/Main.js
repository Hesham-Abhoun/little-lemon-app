import React from "react";
import Specials from "./Specials"
import CustomersSay from "./CustomersSay"
import "./Main.css";
import heroImage from "../assets/restauranfood.jpg";
import reviews from '../data/reviews.json'
import Mario_and_Adrian_A from "../assets/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_b from "../assets/Mario_and_Adrian_b.jpg";
import {Link} from 'react-router-dom'
const Main = () => {
  return (
     <main>
      <section className="hero">
        <div className="banner-text">
          <h1>Little Lemon</h1>
          <h6>chicago</h6>
          <p>
            Nostrud id eiusmod mollit cupidatat culpa qui minim ut esse
            exercitation. Dolor sint do nulla nisi enim. Nisi culpa proident
            occaecat elit magna culpa est nulla dolore.
          </p>
          <Link to="/reservations" className="reserve_table">Reserve Table</Link>
        </div>
        <div className="banner-image">
          <div className="hero-image">
          <img src={heroImage} alt="little lemon special" />
          </div>
         
        </div>
      </section>
     <Specials/>
      <section className="re-views">
        <h2>Testimonials</h2>
        <div className="re-view-items">
        {
          reviews.map(review=><CustomersSay
          key={review.id}
            imageUrl={review.user_photo} 
            name={review.user_name}
            comment={review.user_review}
            rating={review.rating}
            />)
        }
        </div>
      </section>
      <section className="about-section">
        <div className="about-text">
          <h1>Litlle Lemon</h1>
          <h5>chicago</h5>
          <p>
            Ut Lorem ad laboris velit in est irure. Eu mollit officia irure ut
            aliqua et elit aliquip elit. Commodo in cillum reprehenderit
            voluptate exercitation ullamco magna minim excepteur. Aute esse quis
            fugiat et sint consequat in magna veniam minim est id duis Lorem.
            Aliquip dolore sint sint non qui non nostrud est enim.
          </p>
        </div>
        <div className="about-images">
          <div className="container-images">
          <img src={Mario_and_Adrian_A} alt="fd" />
          <img src={Mario_and_Adrian_b} alt="fd" />
          </div>
        </div>
      </section>
    </main>
 
   
   
  );
};

export default Main;
