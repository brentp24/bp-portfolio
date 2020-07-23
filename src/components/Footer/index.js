import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function Footer() {
    return (
        <footer className="footer bg-dark">
            <Link to="https://github.com/brentp24" target="_blank">
                Brent Peterson
            </Link>
            <p>Copyright &copy; 2020</p>
            <div id="backgroundPhotographer" className="column"> hi</div>
        </footer>

    );
}

export default Footer;