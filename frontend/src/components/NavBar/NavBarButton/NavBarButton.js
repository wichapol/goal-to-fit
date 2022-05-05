import React from "react";
import "./NavBarButton.css";

function NavBarButton({
  children = "",
  aClassName = "",
  fontAwesome = "fa-home",
}) {
  return (
    <li className="menu-list">
      <div className={aClassName === "" ? "menu-link" : aClassName}>
        <div className={`menu-icon `}>
          <i className={`fa ${fontAwesome}`}></i>
        </div>
        <p className="menu-name">{children}</p>
      </div>
    </li>
  );
}

export default NavBarButton;
