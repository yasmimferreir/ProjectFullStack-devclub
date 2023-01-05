import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
    return (
        <>
            <h2>Voce está na Pagina Home</h2>
            <Link to="/quemsomos"> Ir para quem somos?</Link>

        </>
    )
}

export default Home;