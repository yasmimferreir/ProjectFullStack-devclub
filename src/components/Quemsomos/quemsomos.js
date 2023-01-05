import React from "react";
import "./quemsomos.css";
import { Link } from "react-router-dom";

function quemSomos() {
    return (
        <div>
            <h2>Voce está na página Quem sommos</h2>

            <Link to="/home">voltar para home</Link>

        </div>
    )
}

export default quemSomos;