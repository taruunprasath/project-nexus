import React, { useState, useEffect } from 'react';
import { FaUser, FaLock, FaLockOpen, FaGoogle, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../signup/signup.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    acceptTerms: false
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [rotateIcon, setRotateIcon] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem('mode');
    setIsDarkMode(mode === 'dark');
  }, []);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    setRotateIcon(true);
    setTimeout(() => setRotateIcon(false), 500);
    document.querySelector('.signup-container').classList.toggle('dark-mode');
    document.querySelector('.signup-container').classList.toggle('light-mode');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: val });
    setErrors({}); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = '';
      toast.error("Username is required");
    }

    if (!formData.email.trim()) {
      newErrors.email = '';
      toast.error("Email is required");
    }

    if (!formData.password.trim()) {
      newErrors.password = '';
      toast.error("Password is required");
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = '';
      toast.error("Please accept the terms and conditions");
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
      toast.success('Sign up successful!')
    } 
  };

  return (
    <div className={`signup-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="top-right-icon" onClick={toggleMode}>
        {isDarkMode ? <MdDarkMode title='Dark Mode' className={`icons ${rotateIcon ? 'rotate' : ''}`} /> : <MdLightMode title='Light Mode' className={`icons ${rotateIcon ? 'rotate' : ''}`} />}
      </div>
      <div className="background1"></div>
      <div className="wrapper1">
        <form onSubmit={handleSubmit}>
          <h1>SIGN UP</h1>
          <div className="input-box1">
            <input type="text" placeholder='Enter Your Username' name="username" value={formData.username} onChange={handleChange} />
            <FaUser className="icon"/>
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div className="input-box1">
            <input type="email" placeholder='Enter Your Email' name="email" value={formData.email} onChange={handleChange} />
            <MdEmail className="icon"/>
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="input-box1">
            <input type={show ? 'text' : 'password'} placeholder='Enter Your Password' name="password" value={formData.password} onChange={handleChange} />
            {show ? <FaLockOpen className='icon' id="ic" title="Hide Password" onClick={() => setShow(prev => !prev)} /> : <FaLock className='icon' id="ic" title="Show Password" onClick={() => setShow(prev => !prev)} />}
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="remember">
            <label><input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange}/>Accept our <Link to="#">Terms and Condition</Link></label>
            {errors.acceptTerms && <p className="error">{errors.acceptTerms}</p>}
          </div>
          
          <button type="submit">Sign Up</button>

          <div className="para">
            <span> Or Signup Using</span>
          </div>

          <div className="icons">
            <FaGoogle id="icon1"/>
            <FaFacebook id="icon2"/>
            <FaXTwitter id="icon3"/>
          </div>

          <div className="register">
            <p>Already have an account?<Link to="/login"><span>Login</span></Link></p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default SignUp;
