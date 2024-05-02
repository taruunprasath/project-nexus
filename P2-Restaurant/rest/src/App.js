import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Login from './Components/Login/Login';
import {ToastContainer} from "react-toastify";
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Food from './Components/Food/Food';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import { AuthProvider } from './Components/AuthContext';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <div>
    <ToastContainer />
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/category/:name' element={ <Food />} />
        <Route path='/menu' element={<Menu />}/>
        <Route path='/footer' element={<Footer />}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
    </div>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
