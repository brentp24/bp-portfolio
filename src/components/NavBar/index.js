import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h3>
                    <NavLink to="/"
                        className="navbar-brand">
                        Brent Peterson
            </NavLink>
                </h3>
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <h5>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    // className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"
                                    style={{ color: "darkGray" }}
                                    activeStyle={{ color: "black" }}
                                    exact
                                >
                                    About
                        </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/portfolio"
                                    // className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"
                                    style={{ color: "darkGray" }}
                                    activeStyle={{ color: "black" }}
                                    exact
                                >
                                    Portfolio
                        </NavLink>
                            </li>


                        </ul>
                    </h5>
                    {/* </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    
                </ul> */}

                </div>
            </nav>
        )

    }
}



// // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// function NavBar() {
//     return (
//         <nav className="navbar navbar-expand-md bg-light">
//             <h4>
//             <Link to="/">
//                 Brent Peterson
//             </Link>
//             </h4>
//             <div>
//                 <ul className="navbar-nav mr-auto">
//                     <h5>
//                     <li className="nav-item">
//                         <Link
//                             to="/"
//                             activeStyle={{color: "black"}}
//                         >
//                             About
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link
//                             to="/portfolio" 
//                             activeStyle={{color: "black"}}
//                             exact
//                         >
//                             Portfolio
//                         </Link>
//                     </li>
//                     </h5>

//                 </ul>
//                 {/* </div>
//                 <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
//                 <ul className="navbar-nav ml-auto">

//                 </ul> */}

//             </div>
//         </nav>
//     );
// }

export default NavBar;