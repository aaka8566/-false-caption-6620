import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../Allpages/Home.jsx";
import Men from "../Allpages/Men";
import Women from "../Allpages/Women"; 
import Mensngl from "../Allpages/Mensngl.jsx";
import Cart from "../Allpages/Cart.jsx";
export default function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/men" element={<Men/>}></Route>
            <Route path="/women" element={<Women/>}></Route>
       <Route path="/mensngl/:id" element={<Mensngl/>}></Route>
       <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
    )
 } 