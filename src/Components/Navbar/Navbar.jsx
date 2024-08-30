import React, { useState } from "react";
import logo from "../../assets/images/EGA_Logo.png";
import Darklogo from "../../assets/images/EGA_Logo_Night.png";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, Link, useParams } from "react-router-dom";
import headeroverlay from "../../assets/images/nav-bg.png";
import nightOverlay from "../../assets/images/nightOverlay.png";
import { useTheme } from "../ThemeContext";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { AudioToggleButton } from "./AudioToggleButton";

export default function Navbar({ audioActive, setAudioActive }) {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const { lang } = useParams();

  const location = useLocation();
  const navigate = useNavigate();
  const handleLangChange = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "ar" : "en";
    const newPath = location.pathname.replace(currentLanguage, newLanguage);
    navigate({
      pathname: newPath,
      search: location.search, // Preserve existing query parameters
    });
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <nav className={`navbar ${theme}`}>
        <div className="navbar-container">
          <div className="headerLeft">
            <div className="navbar-language">
              <div className="language-switcher">
                <div className="language-options">
                  <span onClick={handleLangChange}>{t("header.language")}</span>
                </div>
              </div>
            </div>

            <div className="switchOnOff">
              <AudioToggleButton
                audioActive={audioActive}
                setAudioActive={setAudioActive}
              />
            </div>
          </div>
          <div className="navbar-logo">
            <div className="logo-box">
              <Link to={`/${lang}`}>
                <img className="light-logo" src={logo} alt="" />
              </Link>
              <Link to={`/${lang}`}>
                <img className="dark-logo" src={Darklogo} alt="" />
              </Link>
            </div>
            <div className="corner top-right"></div>
            <div className="corner top-left"></div>
          </div>
          <div className="headerRight">
            <div className="visibleMode">
              <ToggleThemeButton theme={theme} toggleTheme={toggleTheme} />
            </div>
            <div className="eidEvents">
              <Link target="blank">Eid Events</Link>
            </div>
          </div>
        </div>
        <div className="overlayHeader HeaderCommon">
          <img src={headeroverlay} alt="" />
        </div>
        <div className="overlayHeaderNight HeaderCommon">
          <img src={nightOverlay} alt="" />
        </div>
      </nav>
    </>
  );
}
