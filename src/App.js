import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/Techelements/ScrollToTop/scrollToTop";

//PAGES
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

// import Education from "./components/Home/WorkingSpheres/ExpandedPageComponent/TestExpandedList";

import ExpandedPageComponent from "./components/Home/WorkingSpheres/ExpandedPageComponent/ExpandedPageComponent";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<ExpandedPageComponent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
