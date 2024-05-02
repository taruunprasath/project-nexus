import React from 'react';
import {Link} from 'react-router-dom';
import Indian from '../../Assets/Indian.png';
import American from '../../Assets/American.png';
import British from '../../Assets/British.png';
import Chinese from '../../Assets/Chinese.png';
import Thai from '../../Assets/Thai.png';
import '../Menu/menu.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const Menu = () => {
  return (
    <><div>
        <Navbar />
    <Link to={`/category/indian`} className="link">
                    <div className="home-container">
                    <div className="home-banner-container">
                    <div className="home-text-section">
                    <h1 className="primary-heading1" id="primary">
                    Indian
                    </h1>
                    <p className="primary-text">
                    Indulge in the rich tapestry of flavors with our authentic Indian recipes - where every bite tells a story of tradition, spice, and culinary artistry. 
                    Explore the soulful symphony of spices in every dish, as we bring you a taste of India on a plate. 
                    Spice up your life, one recipe at a time! 🌶️🍛 #IndianCuisine #FlavorfulJourney
                    </p>
                    </div>
                    <div className="home-image-section">
                    <img src={Indian} alt="" />
                    </div>
                </div>
                    </div>
                    </Link>
                    <Link to={`/category/american`} className="link">
                    <div className="home-container">
                    <div className="home-banner-container">
                    <div className="home-text-section">
                    <h1 className="primary-heading1" id="primary">
                    American
                    </h1>
                    <p className="primary-text">
                    Savor the taste of the land of liberty with our delicious American recipes. 
                    From classic comfort foods to innovative culinary creations, our recipes celebrate the diverse flavors that define American cuisine. 
                    Join us on a culinary journey across the USA, where every dish tells a tale of tradition, innovation, and good old-fashioned American goodness. 🇺🇸🍔🥧 #AmericanEats #FlavorsofFreedom
                    </p>
                    </div>
                    <div className="home-image-section">
                    <img src={American} alt="" />
                    </div>
                </div>
                    </div>
                    </Link>
                    <Link to={`/category/british`} className="link" >
                    <div className="home-container">
                    <div className="home-banner-container">
                    <div className="home-text-section">
                    <h1 className="primary-heading1" id="primary">
                    British
                    </h1>
                    <p className="primary-text">
                    Embark on a culinary voyage to the heart of Britain with our exquisite recipes.
                     From hearty classics to modern twists, our British fare captures the essence of tradition and innovation. 
                    Elevate your taste buds with the flavors of the UK, where every dish is a symphony of history and gastronomic delight. 🇬🇧🍲🍰 #BritishFlavors #CulinaryTradition
                    </p>
                    </div>
                    <div className="home-image-section">
                    <img src={British} alt="" />
                    </div>
                </div>
                    </div>
                    </Link>
                    <Link to={`/category/chinese`} className="link">
                    <div className="home-container">
                    <div className="home-banner-container">
                    <div className="home-text-section">
                    <h1 className="primary-heading1" id="primary">
                    Chinese
                    </h1>
                    <p className="primary-text">
                    Discover the artistry of Chinese cuisine with our delectable recipes. 
                    From savory stir-fries to mouthwatering dim sum, each dish is a masterpiece that celebrates the rich tapestry of flavors from China. 
                    Join us on a flavorful journey through the heart of Chinese culinary traditions, where every bite tells a story of balance, harmony, and culinary expertise. 🥢🥡 #ChineseCuisine #FlavorsOfChina
                    </p>
                    </div>
                    <div className="home-image-section">
                    <img src={Chinese} alt="" />
                    </div>
                </div>
                    </div>
                    </Link>
                    <Link to={`/category/thai`} className="link">
                    <div className="home-container">
                    <div className="home-banner-container">
                    <div className="home-text-section">
                    <h1 className="primary-heading1" id="primary">    
                    Thai
                    </h1>
                    <p className="primary-text">
                    Embark on a taste adventure with our vibrant Thai recipes. 
                    From fragrant curries to zesty street food delights, experience the bold and exotic flavors that define Thai cuisine. Let the symphony of herbs, spices, and textures transport you to the bustling markets and street stalls of Thailand. 
                    Spice up your palate and take a culinary journey to the Land of Smiles! 🌶️🍜🥢 #ThaiTreats #FlavorsOfThailand
                    </p>
                    </div>
                    <div className="home-image-section">
                    <img src={Thai} alt="" />
                    </div>
                </div>
                    </div>
                    </Link>
                    <Footer />
                    </div>
    </>
  )
}

export default Menu
