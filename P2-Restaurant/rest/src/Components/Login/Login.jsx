import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaUser, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import '../Login/login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const location = useLocation();
    const isSignupPage = location.pathname === '/signup';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login Successful");
            console.log("Login Successful");
            navigate("/home");
        } catch (error) {
            console.log(error.message);
            toast.error("Invalid Login", { position: "top-center" });
        }
    }

    return (
        <div>
            <div className="background"></div>
            <Navbar />
            <div className="quoute">
                <p>&nbsp;Are you hungry?</p>
                <p id="para">Let's Get Started</p>
            </div>
            <div className={`login-container ${isSignupPage ? 'slide-right' : 'slide-left'}`}>
                <div className='wrapper'>
                    <form onSubmit={handleSubmit}>
                        <h1>LOGIN</h1>
                        <div className='input-box'>
                            <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='Email' value={email} />
                            <FaUser className='icon' />
                        </div>
                        <div className='input-box'>
                            <input type={show ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                            {show ? <IoIosEye className='icon' id="ic" title="Hide Password" onClick={() => setShow(prev => !prev)} /> : <IoIosEyeOff className='icon' id="ic" title="Show Password" onClick={() => setShow(prev => !prev)} />}
                        </div>
                        <div className="remember">
                            <label><input type='checkbox' />Remember Me</label>
                            <Link to="#">Forget Password?</Link>
                        </div>
                        <button type="submit">Login</button>
                        <div className="para">
                            <span> Or Continue Using</span>
                        </div>
                        <div className="icons">
                            <FcGoogle className="icon" />
                            <FaFacebook className="icon" id="icon2" />
                            <FaXTwitter className="icon" id="icon3" />
                        </div>
                        <div className="register">
                            <p>Don't have an account?<Link to="/signup"><span>Signup</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
