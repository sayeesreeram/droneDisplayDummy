import React from 'react';
import { StyledContainer, StyledCommonDivForBackgroundColor, StyledHeadingDiv, StyledSecondaryLoginBackground, StyledDiscriptionDiv, StyledInputBox, StyledButton, StyledOuterDiv } from '../Styling/CommonStyledComponents.styled';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState,useEffect } from 'react';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

import {useNavigate} from "react-router-dom"

const styles = makeStyles({
    input: {
        width: "300px",
        // height: "50px !important",
        maxHeight: "50px !important",
        // border: "1px solid black !important",
        padding: "20px",
        borderRadius: "20px !important",
        backgroundColor:"white !important",
        "&.focus": {
            // height: "50px !important",
            // padding: "20px !important",
            width: "300px !important",
            borderRadius: "20px !important",
            border: "1px solid black !important",
            maxHeight: "50px !important",
            backgroundColor:"white !important"
        },
    }
})

function LoginComponent(props) {

    const navigate=useNavigate()
    const classes = styles()
    const [loginDetails, setLoginDetails] = useState({
        username: "",
        password: "",
    })
    const [error, setError] = useState({
        username: false,
        password: false
    })

  
    const submitHandler = () => {
        if (loginDetails.username == "") {
            setError({ ...error, username: true })
        }
        else if (loginDetails.password == "") {
            setError({ ...error, password: true })
        }
        else {
            navigate("/home")
        }
    }
    return (
        <StyledContainer>
            <StyledCommonDivForBackgroundColor style={{ width: "50vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <StyledSecondaryLoginBackground style={{ height: "50vh", width: "100%", borderRadius: "40px", margin: "100px", border: "1px solid white", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "80%", marginTop: "20px" }}>
                        <StyledHeadingDiv>Welcome</StyledHeadingDiv>
                        <StyledHeadingDiv>to the</StyledHeadingDiv>
                        <StyledHeadingDiv>drone</StyledHeadingDiv>
                        <StyledHeadingDiv>display website</StyledHeadingDiv>

                    </div>
                </StyledSecondaryLoginBackground>
            </StyledCommonDivForBackgroundColor>
            <div style={{ width: "50vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <div>
                    <img style={{ backgroundColor: "white", height: "100px", width: "100px" }} src="https://as1.ftcdn.net/v2/jpg/04/07/04/90/1000_F_407049008_R4s3xyDrZZW1tzBfK7BokqXnHdRAQRci.jpg" alt="logo" />
                </div>
                <StyledHeadingDiv style={{ color: "black" }}>Hey,Hello</StyledHeadingDiv>
                <StyledDiscriptionDiv>Enter the information you entered while registering</StyledDiscriptionDiv>
                <StyledOuterDiv>
                    <StyledOuterDiv>
                        <StyledDiscriptionDiv style={{ fontWeight: "600" }}>Email</StyledDiscriptionDiv>
                    </StyledOuterDiv>
                    <TextField  id="outlined-basic" placeholder="Email" variant="outlined" hiddenLabel autoFocus InputProps={{
                        disableUnderline: true,
                    }} classes={{ root: classes.input }} type="email" value={loginDetails.username} onChange={(e) => {
                        setError({ ...error, username: false })
                        setLoginDetails({ ...loginDetails, username: e.target.value })
                    }} error={error.username} helperText={error.username && "Username should not be blank"} />
                    <StyledOuterDiv style={{ marginTop: "40px !important" }}>
                        <StyledDiscriptionDiv style={{ fontWeight: "600" }} >Password</StyledDiscriptionDiv>
                    </StyledOuterDiv>
                    <TextField  id="outlined-basic" placeholder="Password" variant="outlined" classes={{ root: classes.input }} type="password" value={loginDetails.password} onChange={(e) => {
                        setError({ ...error, password: false })
                        setLoginDetails({ ...loginDetails, password: e.target.value })
                    }} error={error.password} helperText={error.password && "Password should not be blank"} />
                </StyledOuterDiv>
                <StyledOuterDiv style={{ display: "flex", justifyContent: "space-around", width: "20vw" }}>
                    <div>
                        <FormControlLabel style={{ font: "20px work sans", cursor: "pointer" }} control={<Checkbox defaultChecked />} label="Remember me" />
                    </div>
                    <div style={{ paddingTop: "12px", font: "16px Roboto,Helvetica,Arial,sans-serif", cursor: "pointer" }}>Forgot Password?</div>
                </StyledOuterDiv>
                <div>
                    <StyledButton type="button" onKeyDown={(e)=>{if(e.key.toLowerCase()==="enter"){
                        submitHandler();
                        console.log("enter")
                    }
                
                }}  onClick={submitHandler}>Log In</StyledButton>
                </div>
            </div>
        </StyledContainer>
    );
}

export default LoginComponent;