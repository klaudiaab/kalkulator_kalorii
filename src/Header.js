import React from "react";

function Header() {
  return (
    <section className="header">
      <div className="header_menu">
        <nav>
          <input
            type="checkbox"
            className="menu_mobile"
            id="menu_mobile"
          ></input>
          <label className="menu_toggle">
            <span></span>
            <span></span>
            <span></span>
            <p>MENU</p>
          </label>
          <ul className="header_nav">
            <li className="nav_element">
              <a href="main#kcal" className="nav_link">
                Kalkulator kalorii i BMI
              </a>
            </li>
            <li className="nav_element">
              <a href="healthyeating" className="nav_link">
                Jak się zdrowo odżywiać?
              </a>
            </li>
            <li className="nav_element">
              <a href="dietitianvisit" className="nav_link">
                Wizyta u dietetyka
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
export default Header;
