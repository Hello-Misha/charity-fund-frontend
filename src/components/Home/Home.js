import React from "react";

import Main from "./Main/Main";
import Medicine from "./WorkingSpheres/Medecine/Medicine";
import Education from "./WorkingSpheres/Education/Education";
import Partners from "./Partners/Partners";
import Founder from "./WorkingSpheres/Founder/Founder";
import Support from "./Support/Support";

function Home() {
  return (
    <main>
      <Main />
      <Medicine />
      <Education />
      <Founder />
      <Support />
      <Partners />
    </main>
  );
}

export default Home;
