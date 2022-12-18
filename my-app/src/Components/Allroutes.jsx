import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../Allpages/Home.jsx";
import Men from "../Allpages/Men"
export default function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/men" element={<Men/>}></Route>
        </Routes>
    )
 } 