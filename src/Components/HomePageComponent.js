import React from 'react';
import HeaderComponent from './HeaderComponent';
import { StyledHomeContainer } from '../Styling/CommonStyledComponents.styled';
import CardsContainer from './CardsContainer';
import { useState } from 'react';
import jsonData from "../sampleData.json"



function HomePageComponent(props) {
    const [search, setSearch] = useState("");
    const [droneDetails, setDroneDetails] = useState([])



    
    const handleChange = (val) => {
        setSearch(val)
        setDroneDetails(droneDetails.filter((v) => v.name.toLowerCase().includes(val.toLowerCase())))
        val.length===0&& setDroneDetails(jsonData.drones)
    }

    return (
        <StyledHomeContainer>
            <HeaderComponent handleChange={handleChange}  />
            <CardsContainer droneDetails={droneDetails} setDroneDetails={setDroneDetails} />
        </StyledHomeContainer>
    );
}

export default HomePageComponent;