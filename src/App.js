import { useEffect, useState } from "react";
import "./assets/SCSS/main.scss";
import { Outlet, useParams } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { useTranslation } from "react-i18next";
import { useTheme } from "./Components/ThemeContext";

function App() {
  const { theme } = useTheme();
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const [audioActive, setAudioActive] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setPageLoaded(true);
      }, 1000);
    };
    if (document.readyState === "complete") {
      setPageLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [pageLoaded]);

  const checkLang = (i18n, lang) => {
    if (lang === "en") {
      i18n.changeLanguage("en");
      document.body.classList.remove("rtl");
    } else if (lang === "ar") {
      i18n.changeLanguage("ar");
      document.body.classList.add("rtl");
    } else {
      i18n.changeLanguage("ar");
      document.body.classList.add("rtl");
    }
  };

  useEffect(() => {
    checkLang(i18n, lang);
  }, [lang]);

  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable inspect element shortcuts
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && e.shiftKey && e.key === "I") || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.key === "J") || // Ctrl+Shift+J
        (e.ctrlKey && e.key === "U") || // Ctrl+U
        e.key === "F12" // F12
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {!pageLoaded ? (
        <div className={`preLoader visible`}>
          <div className="spinner"></div>
        </div>
      ) : (
        <div
          className={`wrapper ${theme} ${lang === "en" ? "ltr" : "rtl"} ${
            pageLoaded ? "visible" : "invisible"
          }`}
        >
          <Navbar audioActive={audioActive} setAudioActive={setAudioActive} />
          <Outlet
            context={[audioActive, setAudioActive, pageLoaded, setPageLoaded]}
          />
          <Footer audioActive={audioActive} />
        </div>
      )}
    </>
  );
}

export default App;
