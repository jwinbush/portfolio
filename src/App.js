
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'; //tailwind.css
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Preloader from "./components/preload/Pre";
import { useEffect, useState } from "react";


function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
    <BrowserRouter>
    <Preloader load={load} />
    <Header/>
    <Routes>
          <Route
           path='/'
           exact
           element={<Home/>}
       />
        <Route
           path='/about'
           exact
           element={<About/>}
       />
       <Route
           path='/portfolio'
           exact
           element={<Portfolio/>}
       />
        <Route
           path='/contact'
           exact
           element={<Contact/>}
       />
   </Routes>
   <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
