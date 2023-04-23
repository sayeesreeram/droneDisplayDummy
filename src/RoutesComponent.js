import { Routes, Route } from "react-router-dom"
import LoginComponent from "./Components/LoginComponent";
import React from 'react';
import HomePageComponent from "./Components/HomePageComponent";

function RoutesComponent(props) {
    return (
        <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/home" element={<HomePageComponent />} />
        </Routes>
    );
}

export default RoutesComponent;