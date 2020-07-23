import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavBar() {
    return (
        <nav className="navbar navbar-expand-md bg-light">
            <Link className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2" to="/">
                Brent Peterson
            </Link>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={window.location.pathname === "../../pages/Login.js" ? "nav-link active" : "nav-link"}
                        >
                            About

                        </Link>

    
                    </li>
                </ul>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link
                            to="/portfolio"
                            className={window.location.pathname === "../../pages/Login.js" ? "nav-link active" : "nav-link"}
                        >
                            Portfolio
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default NavBar;