import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import parceiros from "./components/Parceiros/parceiros";
import quemSomos from "./components/Quemsomos/quemsomos";

function Rotas() {
    return(
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quemsomos" element={ quemSomos}></Route>
        <Route path="/parceiros" element={ parceiros}></Route>
       </Routes>
       </BrowserRouter>
    )
}

export default Rotas