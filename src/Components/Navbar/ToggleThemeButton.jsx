import moonIcon from "./../../assets/images/moon1.png";
import sunIcon from "./../../assets/images/sun1.png";

export const ToggleThemeButton = ({ theme, toggleTheme }) => {
  const isDarkMode = theme === "dark-mode";
  const icon = isDarkMode ? moonIcon : sunIcon;

  return (
    <div className={`toggle-button ${theme}`} onClick={toggleTheme}>
      <img src={icon} className="icon" alt="Toggle icon" />
    </div>
  );
};
