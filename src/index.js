import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import { BrowserRouter } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import i18nextOptions from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init(
    {
      supportedLngs: [ "ru", "uz"],
      fallbackLng: "ru",
      detection: {
        order: ["htmlTag", "cookie", "localStorage", "subdomain", "path"],
        caches: ["localStorage", "cookie"],
      },
      backend: {
        loadPath: "/assets/locales/{{lng}}/translation.json",
      },
      // react: { useSuspense: false },
      interpolation: {
        escapeValue: false,
      },
    },
    i18nextOptions
  );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <Root />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
