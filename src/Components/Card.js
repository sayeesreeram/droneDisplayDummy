import React from 'react';
import { StyledCardContainer, StyledDiscriptionDiv, StyledHeadingDiv } from '../Styling/CommonStyledComponents.styled';
import { Typography } from '@mui/material';
import img1 from "../images/img1.jpg"

function Card({ data, src,index,handleClick }) {
    return (
        <StyledCardContainer>

            <img src={require(`../images/${src}.jpg`)} style={{ width: "350px", height: "500px", display: "flex", justifyContent: "center", margin: "0px 0px", textAlign: "center", flexGrow: 1, }} alt="image" />
            <div>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ width: "400px", textAlign: "center", justifyContent:"center",flexGrow: 1, color: "black !important", font: "30px work sans", fontWeight: "600", display: { xs: 'none', sm: 'block' } }}
                >{data.name}</Typography>
                <div style={{ display: "flex",margin:"20px 20px" ,font: "22px work sans"}}>
                    <span style={{ fontWeight: "600" }}>
                        Brand:
                    </span>
                    {data.brand}
                </div>
                <div style={{ display: "flex",margin:"20px 20px" ,font: "22px work sans"}}>
                    <span style={{ fontWeight: "600" }}>
                        Type:
                    </span>
                    {data.type}
                </div>
                <div style={{ display: "flex",margin:"20px 20px" ,font: "22px work sans"}}>
                    <span style={{ fontWeight: "600" }}>
                        Dimensions:
                    </span>
                    {data.dimensions}
                </div>
                <div style={{ display: "flex",margin:"20px 20px" ,font: "22px work sans"}}>
                    <span style={{ fontWeight: "600" }}>
                        Max Flight Time:
                    </span>
                    {data.max_flight_time}
                </div>
                <div style={{ display: "flex",margin:"20px 20px" ,font: "22px work sans"}}>
                    <span style={{ fontWeight: "600" }}>
                        Max Speed:
                    </span>
                    {data.max_speed} Km/Ph
                </div>
                <div style={{margin:"20px 20px" ,font: "22px work sans",wordSpacing:"1px"}}>
                    <div style={{ fontWeight: "600" }}>
                        Description:
                    </div>
                    <div style={{padding:"5px 0px"}}>{data.description}</div>
                </div>
            </div>
          
        </StyledCardContainer>
    );
}

export default Card;