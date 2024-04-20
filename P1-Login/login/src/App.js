import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Login from './Components/login/Login';
import SignUp from './Components/signup/SignUp';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
