import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navItems = ["HOME", "CARS", "DEALERS"];
  const navigate = useNavigate();
  const [token, setToken]= useState<string | null>(localStorage.getItem("token"));

  const handleDrawerToggle = () => {};

  const onLogout =()=>{
    localStorage.clear();
    setToken(null);
    navigate("/");
  }

useEffect(()=>{
    setToken(localStorage.getItem("token"));
},[])
  return (
    <AppBar component="nav" slot="AppBar">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          CAR -DEALER
        </Typography>
        <Box sx={{ mr: 5, display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Link key={item} to={"/" + item.toLowerCase()}>
              <Button sx={{ color: "#fff" }}>{item}</Button>
            </Link>
          ))}
           {
            token == null ?   <Link key={"login"} to="/login"><Button sx={{ color: "#fff" }}>LOG IN</Button>  </Link>: <Button sx={{ color: "#fff" }} onClick={()=>{onLogout()}}>LOG OUT</Button>
           }
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
