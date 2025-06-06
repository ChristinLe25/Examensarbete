import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Omoss from "./pages/Omoss";
import Examensarbete from "./pages/Examensarbete";
import "./App.css";
import Header from "./Header";

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
       <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Omoss" element={<Omoss />} />
            <Route path="/Examensarbete" element={<Examensarbete />} />
          </Routes>
          
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
