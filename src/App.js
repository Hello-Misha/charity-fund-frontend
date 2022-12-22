import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/Techelements/ScrollToTop/scrollToTop";

//PAGES
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Page404 from "./components/Page404/Page404";

// import Education from "./components/Home/WorkingSpheres/ExpandedPageComponent/TestExpandedList";

import ExpandedPageComponent from "./components/Home/WorkingSpheres/ExpandedPageComponent/ExpandedPageComponent";

import EducationAboutIMGs from "./components/Home/WorkingSpheres/ExpandedPageComponent/EducationAboutIMGs";
import MedicineAboutIMGs from "./components/Home/WorkingSpheres/ExpandedPageComponent/MedicineAboutIMGs";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/education"
          element={
            <ExpandedPageComponent
              page={"education"}
              img={EducationAboutIMGs}
            />
          }
        />
        <Route
          path="/medicine"
          element={
            <ExpandedPageComponent page={"medicine"} img={MedicineAboutIMGs} />
          }
        />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
