import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import home from "../../pages/Home/home";


function Navbar() {
    return (
        <div className='navbar'>
            <ul className="container-li">
                <Link to="/home"> <li>Home</li> </Link>
                <Link to="/quemsomos"><li>Quem somos?</li></Link>
                <li>Parceiros</li>
                <li>Contato</li>
                <button>Saiba mais</button>
            </ul>

        </div>
    )

}

export default Navbar;