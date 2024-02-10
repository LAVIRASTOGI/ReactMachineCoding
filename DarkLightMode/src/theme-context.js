const { useContext, createContext, useState } = require("react");

const themeContext = createContext();

export const useTheme = () => {
  return useContext(themeContext);//values =--isDarkMode, toggleButtonHandler
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleButtonHandler = () => {
      let bodyElement = document.querySelector("body");
      !isDarkMode
      ? bodyElement.setAttribute("data-theme", "dark")
      : bodyElement.setAttribute("data-theme", "light")
      setIsDarkMode((prev) => !prev);
  };

  return (
    <themeContext.Provider value={{ isDarkMode, toggleButtonHandler }}>
      {children}
    </themeContext.Provider>
  );
};
