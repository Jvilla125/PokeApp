import React from "react";
import {Link} from "react-router-dom";

import './Header.css';



function Header() {
    return (
        <div className="header">
            <div>
                <h1>Home</h1>
            </div>
            <div>
                <h1>Welcome to PokeApp</h1>
            </div>
            <ul id="starter">
                <li><Link to="/login"><h1>Login</h1></Link></li>
                <li><Link to="/signup"><h1>Sign up</h1></Link></li>
            </ul>
        </div>
    )
}

export default Header;