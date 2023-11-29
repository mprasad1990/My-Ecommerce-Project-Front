import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import ShopAll from './components/ShopAll';
import Makeup from './components/Makeup';
import SkinCare from './components/SkinCare';
import HairCare from './components/HairCare';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <div className="container-fluid p-0">
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/shopall" element={<ShopAll/>}></Route>
            <Route exact path="/makeup" element={<Makeup/>}></Route>
            <Route exact path="/skincare" element={<SkinCare/>}></Route>
            <Route exact path="/haircare" element={<HairCare/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
