import React, { useState, useEffect } from 'react';
import "../login/login.css";
import { FaUser, FaLock, FaLockOpen, FaGoogle, FaFacebook } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Login = () => {
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
        document.querySelector('.login-container').classList.toggle('dark-mode');
        document.querySelector('.login-container').classList.toggle('light-mode');
    };

    return (
        <div className={`login-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="top-right-icon" onClick={toggleMode}>
                {isDarkMode ? <MdDarkMode title='Dark Mode' className={`icons ${rotateIcon ? 'rotate' : ''}`} /> : <MdLightMode title='Light Mode' className={`icons ${rotateIcon ? 'rotate' : ''}`} />}
            </div>
            <div className="background"></div>
            <div className='wrapper'>
                <form action=''>
                    <h1>LOGIN</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Username' />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type={show ? 'text' : 'password'} placeholder='Password'/>
                        {show ? <FaLockOpen className='icon' id="ic" title="Hide Password" onClick={() => setShow(prev => !prev)} /> : <FaLock className='icon' id="ic" title="Show Password" onClick={() => setShow(prev => !prev)} />}
                    </div>

                    <div className="remember">
                        <label><input type='checkbox' />Remember Me</label>
                        <Link to="#">Forget Password?</Link>
                    </div>

                    <button type="submit">Login</button>

                    <div className="para">
                        <span> Or Login Using</span>
                    </div>

                    <div className="icons">
                        <FaGoogle id='icon1' />
                        <FaFacebook id='icon2' />
                        <FaXTwitter id='icon3' />
                    </div>

                    <div className="register">
                        <p>Don't have an account?<Link to="/signup"><span>Signup</span></Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
