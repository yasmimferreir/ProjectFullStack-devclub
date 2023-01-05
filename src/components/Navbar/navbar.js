import React from "react";
import "./navbar.css"

function Navbar() {
    return (
        <div className='navbar'>
            <ul className="container-li">
                <li>Home</li>
                <li> Quem somos? </li>
                <li>Parceiros</li>
                <li>Contato</li>
                <button>Saiba mais</button>
            </ul>
        </div>
    )
}

export default Navbar;