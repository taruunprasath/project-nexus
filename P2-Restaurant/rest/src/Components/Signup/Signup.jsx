import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaUser, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import '../Signup/signup.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar/Navbar';

const Signup = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === '/login';
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup Successful");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:");
      toast.error("Signup Failed", { position: "top-center" });
    }
  };

  return (
    <div>
      <div className="background"></div>
      <Navbar />
      <div className="quoute">
        <p>&nbsp;Are you hungry?</p>
        <p id="para">Let's Get Started</p>
      </div>
      <div className={`signup-container ${isLoginPage ? 'slide-left' : 'slide-right'}`}>
        <div className='wrapper'>
          <form onSubmit={handleSignup}>
            <h1>SIGN UP</h1>
            <div className='input-box'>
              <input type='text' placeholder='Username' />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="email" placeholder='Enter Your Email' name="email" onChange={(e) => setEmail(e.target.value)} />
              <MdEmail className="icon" />
            </div>
            <div className='input-box'>
              <input type={show ? 'text' : 'password'} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
              {show ? <IoIosEye className='icon' id="ic" title="Hide Password" onClick={() => setShow(prev => !prev)} /> : <IoIosEyeOff className='icon' id="ic" title="Show Password" onClick={() => setShow(prev => !prev)} />}
            </div>
            <div className="remember">
              <label><input type='checkbox' />Accept Terms & Conditions</label>
            </div>
            <button type="submit">Signup</button>
            <div className="para">
              <span> Or Continue Using</span>
            </div>
            <div className="icons">
              <FcGoogle className="icon" />
              <FaFacebook className="icon" id="icon2" />
              <FaXTwitter className="icon" id="icon3" />
            </div>
            <div className="register">
              <p>Don't have an account?<Link to="/login"><span>Login</span></Link></p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
