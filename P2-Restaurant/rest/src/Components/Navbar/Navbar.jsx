import React from 'react'
import { Link} from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import "../Navbar/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
                <div className="logo">
                    <p>MOON <span>CAFE</span></p>
                    <div className="nav-menu">
                        <ul>
                            <li><Link to="/home" className="link">Home</Link></li>
                            <li><Link to="/menu" className="link">Menu</Link></li>
                            <li><Link to="/about" className="link">About</Link></li>
                            <li><Link to="#" className="link">Order</Link></li>
                        </ul>
                    </div>
                    <div className="nav-button">
                        <Link to="/login">
                            <button className='btn' id="loginBtn">Login</button>
                        </Link>
                        <Link to="/signup">
                            <button className='btn' id="signupBtn">Sign Up</button>
                        </Link>
                    </div>
                    <div className="nav-menu-btn">
                        <IoMdMenu />
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Navbar
