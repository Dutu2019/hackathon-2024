import { useContext } from "react";
import {userContext} from "./Contexts/User";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import "./App.css"

function App() {
  const user = useContext(userContext)
  console.log(user)

  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="sign-up" element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
