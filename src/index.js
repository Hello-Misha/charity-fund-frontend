import React from "react";
import ReactDOM from "react-dom/client";

//STYLES
import "./styles/index.scss";

//LOCALISATION
import i18next from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import App from "./App";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAYscBuo7jOX5YxY-Yn5eTyz6oVObjHpEE",
  authDomain: "charity-fund-frontend.firebaseapp.com",
  projectId: "charity-fund-frontend",
  storageBucket: "charity-fund-frontend.appspot.com",
  messagingSenderId: "1040414228167",
  appId: "1:1040414228167:web:17adf2dc28b390f0a8c8e2",
};

initializeApp(firebaseConfig);

i18next
  .use(HttpApi)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["ua", "en"],
    fallbackLng: "ua",
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
