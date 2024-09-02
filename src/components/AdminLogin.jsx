import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SignIn.css'; // Make sure this file contains the CSS provided below
import './AdminLogin.css';
import img1 from '../images/HomeImg1.jpg';
import img2 from '../images/HomeImg2.jpg';
import img3 from '../images/HomeImg3.jpg';
import img4 from '../images/HomeImg4.jpg';
import img5 from '../images/HomeImg5.jpg';


const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle admin authentication
    navigate('/admin-dashboard');
  };

  return (
    <div className="login-container">
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

      <div className="login">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
