import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../Images/carousel1.jpg";
import carousel2 from "../../Images/carousel2.jpg";
import carousel3 from "../../Images/carousel3.jpg";
import carousel4 from "../../Images/carousel4.jpg";

const Home = () => {
  return (
    <div>
      <div className="welcome-quote">
        <h2>SHOPPING TIME..!!</h2>
        <p className="welcome-para">
          "Each day is a page in your fashion story. Find your fashion fix."
        </p>
      </div>

      <section id="home" className="home-block">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={carousel1} alt="First slide" />
            <Carousel.Caption>
              <p >
                "You can have anything you want in life if you dress for it."
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel2} alt="Second slide" />
            <Carousel.Caption>
              <p>"Clothes mean nothing until someone lives in them."</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel3} alt="Third slide" />
            <Carousel.Caption>
              <p>
                "I don't know who invented high heels, but all women owe him a
                lot!"
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={carousel4} alt="Third slide" />
            <Carousel.Caption>
              <p>
                "Style is a way to say who you are without having to speak."
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
};

export default Home;
