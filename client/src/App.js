import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar";
import "./App.css"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
