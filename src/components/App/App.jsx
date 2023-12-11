import React from "react";
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import NavBar from "../NavBar/NavBar";


function App() {

    const [darkMode, setDarkMode] = React.useState(getInitialMode());
    React.useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(darkMode));
    }, [darkMode]);

    function getInitialMode() {
        const isReturningUser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem("dark"));
        const userPrefersDark = getPrefColorScheme();
        if (isReturningUser) {
            return savedMode;
        } else if (userPrefersDark) {
            return true;
        } else {
            return false;
        }
    }

    function getPrefColorScheme() {
        if (!window.matchMedia) return;
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }


  return (
      <>
          <div className={darkMode ? 'wrap wrap--dark' : 'wrap wrap--light'}>
              <div className='main-container'>
                  <Router>
                      <div className='nav-container'>
                          <div className="toggle-container">
                              <span className='toggle-icon-box' style={{opacity: darkMode ? "1" : "0"}}><img src="public/images/sun-icon.svg" alt="sun-icon"/>︎</span>
                              <span className="toggle">
                                    <input checked={darkMode} onChange={() => setDarkMode(prevMode => !prevMode)} id="checkbox" className="checkbox" type="checkbox"/>
                                    <label htmlFor="checkbox"/>
                                </span>
                              <span className='toggle-icon-box' style={{opacity: darkMode ? "0" : "1"}}><img src="public/images/moon-icon.svg" alt="moon-icon"/></span>
                          </div>
                          <NavBar/>
                      </div>
                  </Router>
              </div>
          </div>
      </>
  );
}

export default App;
