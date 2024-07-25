import React from "react";
import "./Main.css";
import heroImage from "../assets/hero_image.jpg";
import customerImage from "../assets/customer.png";
import Mario_and_Adrian_A from "../assets/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_b from "../assets/Mario_and_Adrian_b.jpg";
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
          <button className="reserve_table">Reserve Table</button>
        </div>
        <div className="banner-image">
          <img src={heroImage} alt="little lemon special" />
        </div>
      </section>
      <section className="special-items">
        <div className="online-menu">
          <span>Specials</span>
          <a href="#online_menu">Online Menu</a>
        </div>

        <div className="menu-items">
          <div className="menu-item">
            <img src={heroImage} alt="product" />
            <div className="item-details">
              <span className="item-name">Grzzc Salad</span>
              <span className="item-price">$20</span>
            </div>
            <p>
              Ea incididunt enim enim sunt officia culpa nisi nostrud laboris.
              Aliquip labore anim officia irure id consequat cupidatat do culpa.
              Ullamco enim magna minim occaecat nulla. Duis exercitation aliqua
              ut do est esse pariatur tempor anim ea pariatur sunt. Nisi ad aute
              laborum cupidatat amet laborum aliquip in amet esse non ullamco
              sit.
            </p>
            <a href="#order_delevery">Order a delevry
              
            </a>
          </div>
          <div className="menu-item">
            <img src={heroImage} alt="product" />
            <div className="item-details">
              <span className="item-name">Grzzc Salad</span>
              <span className="item-price">$20</span>
            </div>
            <p>
              Ea incididunt enim enim sunt officia culpa nisi nostrud laboris.
              Aliquip labore anim officia irure id consequat cupidatat do culpa.
              Ullamco enim magna minim occaecat nulla. Duis exercitation aliqua
              ut do est esse pariatur tempor anim ea pariatur sunt. Nisi ad aute
              laborum cupidatat amet laborum aliquip in amet esse non ullamco
              sit.
            </p>
            <a href="#order_delevery">Order delevry</a>
          </div>
          <div className="menu-item">
            <img src={heroImage} alt="product" />
            <div className="item-details">
              <span className="item-name">Grzzc Salad</span>
              <span className="item-price">$20</span>
            </div>
            <p>
              Ea incididunt enim enim sunt officia culpa nisi nostrud laboris.
              Aliquip labore anim officia irure id consequat cupidatat do culpa.
              Ullamco enim magna minim occaecat nulla. Duis exercitation aliqua
              ut do est esse pariatur tempor anim ea pariatur sunt. Nisi ad aute
              laborum cupidatat amet laborum aliquip in amet esse non ullamco
              sit.
            </p>
            <a href="#order_delevery">Order delevry</a>
          </div>
        </div>
      </section>
      <section className="re-views">
        <h2>Testimonials</h2>
        <div className="re-view-items">
          <div className="review-item">
            <h3>rating</h3>
            <div className="customer-info">
              <img src={customerImage} alt="df" />
              <h3>something</h3>
            </div>
            <p>comment</p>
          </div>
          <div className="review-item">
            <h3>rating</h3>
            <div className="customer-info">
              <img src={customerImage} alt="df" />
              <h3>something</h3>
            </div>
            <p>comment</p>
          </div>
          <div className="review-item">
            <h3>rating</h3>
            <div className="customer-info">
              <img src={customerImage} alt="df" />
              <h3>something</h3>
            </div>
            <p>comment</p>
          </div>
          <div className="review-item">
            <h3>rating</h3>
            <div className="customer-info">
              <img src={customerImage} alt="df" />
              <h3>something</h3>
            </div>
            <p>comment</p>
          </div>
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
