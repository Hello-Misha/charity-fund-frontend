import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Medicine from "./components/Напрямки/Medecine/Medicine";

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
      </main>
    </>
    /* </main> */
    // </Routes>
    // </BrowserRouter>
  );
}

export default App;
//<button className="Button-blue Text-bold DarkBlue">Пожертвувати</button
