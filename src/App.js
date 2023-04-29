import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"; //tailwind.css
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Preloader from "./components/preload/Pre";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/scroll/ScrollToTop";
import ResumeNew from "./pages/Resume";
import Social from "./components/social-icons/Social";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 2000); //loading screen last 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* <Preloader load={load} /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/resume" exact element={<ResumeNew />} />

        </Routes>
        <Social/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
