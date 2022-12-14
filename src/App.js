import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/Techelements/ScrollToTop/scrollToTop";

//PAGES
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
