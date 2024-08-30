import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { I18nextProvider } from "react-i18next";
import i18n from "./Components/Locale/i18n";
import { ThemeProvider } from "./Components/ThemeContext";
import { ModalProvider } from "./Components/ModalContext";
import ScrollToTop from "./Components/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ModalProvider>
          <ParallaxProvider>
            <AppRoutes />
          </ParallaxProvider>
        </ModalProvider>
      </BrowserRouter>
    </ThemeProvider>
  </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
