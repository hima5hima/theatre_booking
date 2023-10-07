import { Outlet } from "react-router-dom";

import "./css/App.css";
import React from "react";

import Home from "./component/Home";
import Footer from "./component/Footer";
import BaymentForm from "./component/BaymentForm";
import ReactSwitch from "react-switch";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="switch">
          <label className="label-theme"> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
       <div className="cover">
         <Home />
         <Outlet />
         <Footer />
       </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
