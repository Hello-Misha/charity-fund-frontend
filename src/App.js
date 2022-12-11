import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Medicine from "./components/Напрямки/Medecine/Medicine";
import Education from "./components/Напрямки/Education/Education";
import Partners from "./components/Partners/Partners";
import Founder from "./components/Напрямки/Founder/Founder";
import Support from "./components/Support/Support";
import Footer from "./components/Footer/Footer";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ScrollToTop from "../src/components/Techelements/ScrollToTop/scrollToTop";

//

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    // <main>
    <>
      <Header />
      <main>
        <Main />
        <Medicine />
        <Education />
        <Founder />
        <Support />
        <Partners />
      </main>
      <Footer />
    </>
    /* </main> */
    // </Routes>
    // </BrowserRouter>
  );
}

export default App;
//<button className="Button-blue Text-bold DarkBlue">Пожертвувати</button
