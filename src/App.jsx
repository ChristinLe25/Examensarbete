import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projektlogik from "./pages/Projektlogik";
import Examensarbete from "./pages/Examensarbete";
import Header from "./Header";

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
       <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projektlogik" element={<Projektlogik />} />
            <Route path="/Examensarbete" element={<Examensarbete />} />
          </Routes>
          
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
