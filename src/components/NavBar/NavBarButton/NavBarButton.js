import React from "react";
import "./NavBarButton.css"


function NavBarButton({ children="", aClassName="", fontAwesome="fa-home" ,aHref="#"}) {

    return (
        <li className="menu-list">
            <div className={aClassName ===""? "menu-link":aClassName}>
                <div className={`menu-icon fa ${fontAwesome}`} ></div>
                <p className="menu-name">{children}</p>
            </div>
        </li>
    );
}


export default NavBarButton;