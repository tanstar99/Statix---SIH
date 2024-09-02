import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Import the react-slick slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../images/HomeImg1.jpg';
import img2 from '../images/HomeImg2.jpg';
import img3 from '../images/HomeImg3.jpg';
import img4 from '../images/HomeImg4.jpg';
import img5 from '../images/HomeImg5.jpg';

const SignIn = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="signin-container">
      <div className="slider-container">
        <Slider {...sliderSettings}>
          <div>
            <img src={img1} alt="Slide 1" className="slider-image" />
          </div>
          <div>
            <img src={img2} alt="Slide 2" className="slider-image" />
          </div>
          <div>
            <img src={img3} alt="Slide 4" className="slider-image" />
          </div>
          <div>
          <img src={img4} alt="Slide 5" className="slider-image" />
          </div>
          <div>
          <img src={img5} alt="Slide 6" className="slider-image" />
          </div>
         
        </Slider>
      </div>

      <div className="signin">
        <h2>Sign In</h2>
        <Link to="/admin-login">Admin Login</Link>
        <br />
        <Link to="/user-login">User Login</Link>
      </div>
    </div>
  );
};

export default SignIn;
