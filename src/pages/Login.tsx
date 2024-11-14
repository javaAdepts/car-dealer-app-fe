import { Box, Button, Container, TextField, Typography } from "@mui/material";
import "./Login.css";
import { useRef, useState } from "react";
import { LoginData } from "../types";
import axios from "axios";
import { useNavigate, redirect } from "react-router-dom";

const Login = () => {
   
    const [loginData, setLoginData]= useState<LoginData>({userEmail:"", userPassword:""});
    const navigate = useNavigate();

     const onChnageEmail =(e:any)=>{
        if(e?.target?.value){
           setLoginData({
            ...loginData,
            userEmail:e.target.value
           })
           console.log(e.target.value)
        }
     }
  

     const onChnagePassword = (e:any)=>{
        if(e?.target?.value){
            setLoginData({
             ...loginData,
             userPassword:e.target.value
            })
         }
     }


const onLogin= async ()=>{
    // request the login access from backend 
  let res = await axios({method:"post", url:"http://localhost:9595/api/login", data:{
    "username":loginData.userEmail,
    "password":loginData.userPassword
   }});
 console.log(res);
     // get the token from response 
 const {data} = res;

if(data.token){
    // if there is alredy token set it to empty
    localStorage.setItem("token", "");
    // update it to current token
    localStorage.setItem("token", JSON.stringify("Bearer " + data.token));
}

// navigate to cars page
navigate("/cars");

}



  return (
    <Container fixed>
      <Box id="loginform" autoComplete="off" component={"form"}>
        <Typography variant="h5" align="center">
          Welcome to App
        </Typography>
        <div className="centerItem">
          {" "}
          <TextField  id="email" label="User Email" variant="outlined" type="email" onChange={(e)=>{onChnageEmail(e)}} value={loginData.userEmail} />
        </div>
        <div className="centerItem">
          {" "}
          <TextField id="password" label="User Password" variant="outlined" type="password"  onChange={(e)=>{onChnagePassword(e)}} value={loginData.userPassword}/>
        </div>
        <Button
          className="centerItem"
          variant="contained"
          style={{ margin: "auto" }}
          onClick={()=>{
            onLogin();
          }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
