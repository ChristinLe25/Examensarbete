<<<<<<< HEAD
import { useState } from "react";
import reactLogo from "./assets/listina-loga.svg";
import viteLogo from "./assets/blueshappe.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />

        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Examensarbete Tillsammans💪✨🎉</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>litte till</p>
      </div>
      <p>litte täxt och sådant</p>
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
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
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Examensarbete" element={<Examensarbete />} />
          </Routes>
          
        </BrowserRouter>
      </div>
>>>>>>> 89ec3257a3d2ef83e54c3c8c5baba43fae34f671
    </>
  );
}

export default App;
