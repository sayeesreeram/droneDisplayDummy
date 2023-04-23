import React,{useState,useEffect} from 'react';
import jsonData from "../sampleData.json"
import { StyledRowFlexDiv } from '../Styling/CommonStyledComponents.styled';
import Card from './Card';

function CardsContainer({droneDetails,setDroneDetails}) {

    useEffect(()=>{
        setDroneDetails(jsonData.drones)
    },[])



    return (
        <StyledRowFlexDiv>
            {Array.isArray(droneDetails)&&droneDetails.map((v,i)=>{
                return <Card data={v} src={`img${i+1}`} index={i} />
            })}
        </StyledRowFlexDiv>
    );
}

export default CardsContainer;