import React from 'react';
import "../About/about.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const About = () => {
  return (
    <div>
    <Navbar/>
    <div className="about-container">
      <h2>About Us</h2>
      <p>Welcome to Moon Cafe, where passion meets culinary excellence.</p>
      <p>At Moon Cafe, we believe in crafting exceptional dining experiences that linger in your memory long after the last bite. Our commitment to quality, creativity, and impeccable service sets us apart, making us a destination for food enthusiasts and connoisseurs alike.</p>
      <p>With a dedication to sourcing the finest ingredients and a relentless pursuit of perfection, every dish at Moon Cafe is a work of art. From our signature creations to classic favorites, each plate is a celebration of flavor, texture, and presentation.</p>
      <p>Come join us on a culinary journey like no other and experience the magic of Moon Cafe.</p>

      <div className="mission-vision">
        <h2>Our Mission</h2>
        <p>Our mission is to create memorable dining experiences by delivering culinary excellence, exceptional service, and a welcoming atmosphere to every guest.</p>

        <h2>Our Vision</h2>
        <p>Our vision is to be recognized as a leader in the culinary industry, known for our innovation, creativity, and commitment to quality.</p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default About;
