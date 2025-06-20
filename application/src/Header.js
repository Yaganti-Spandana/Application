import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";

function Header() { 
    return ( 
    <AppBar position="sticky"> 
    <Toolbar> 
        <Typography variant="h6" sx={{ flexGrow: 1 }}>StreamX</Typography> 
        <Tabs value={0} textColor="inherit" indicatorColor="secondary"> 
            <Tab label="Home" /> <Tab label="Movies" /> 
            <Tab label="TV Shows" /> <Tab label="My List" /> 
        </Tabs> 
    </Toolbar> 
    </AppBar> ); }

export default Header;