import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Headers = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    return setShow(!show);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink className="nav-link" to="/">
              <h1>FactSphere</h1>
            </NavLink>
          </div>

          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/country">
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
