import React from 'react'
import Navbar from '../Navbar/Navbar.jsx';
import "../Home/home.css";
import BannerBackground from '../../Assets/home-background.png';
import BannerImage from '../../Assets/food.png';
import AboutBackground from '../../Assets/about-background.png';
import AboutBackgroundImage from '../../Assets/icecream.png';
import Image1 from '../../Assets/food2.png';
import Footer from '../Footer/Footer.jsx';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="home-container">
      <div className="home-banner-container">
      <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Healthy and Tasty 
          </h1>
          <p className="primary-text">
          Indulge in an array of delectable dishes crafted with passion and precision at Moon Cafe. 
          Experience culinary excellence and impeccable service in every visit. Delight your taste buds with our carefully curated menu, where every dish tells a story of flavor and creativity. 
          Discover a culinary journey like no other.
          </p>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
    <div className="home-container">

    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading1">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        A balanced diet includes a variety of nutrients in appropriate proportions, emphasizing moderation and choosing nutrient-dense foods. 
        Hydration is also crucial. Individualized dietary approaches, considering factors like age and activity level, contribute to overall well-being.
        </p>
        </div>
        </div>
    </div>
    <div className="home-container">

      <div className="home-banner-container">
      <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading2">
          Why Us?
          </h1>
          <p className="primary-text">
          At our restaurant, patrons enjoy transparent ingredient quantities, 
          detailed step-by-step cooking instructions, nutritional information per serving, 
          and thoughtful suggestions for substitutions. Elevate your dining experience with captivating visuals, 
          including high-quality images and videos. Join our vibrant community, where you can engage through reviews and comments, fostering a sense of culinary camaraderie.
          </p>
        </div>
        <div className="home-image-section">
          <img src={Image1} alt="" />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Home
