import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import "./home.css"

function home() {
    return (
        <div className="">
            <Navbar />
            <h2>Voce está na pagina Home</h2>
        </div>
    )
}

export default home;