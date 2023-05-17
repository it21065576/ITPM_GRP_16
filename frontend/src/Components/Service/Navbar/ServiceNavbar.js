import * as React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Grid, Toolbar, Tabs, Tab, Box, Button, useTheme, useMediaQuery} from "@mui/material";
// import logo from '../../../assect/images/logo.png'
// import '../../NavbarTabs/.css'
import './.css'
import logo from '../Images/logo.JPG'



const Navbar = () => {
  const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));//use decresing  window size
    console.log(isMatch);//use decresing  window size

    const [value, setValue] = React.useState('one');

    
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    return (
      <AppBar  position="static" top="fixed" sx={{backgroundColor: '#0D2938'}}>
        <Toolbar>
          {isMatch ? 
          <> 
            <h4>Jayasinghe Oil Meals</h4>
          </> : <Grid container>
            <Grid item xs={2}>
              <img class="logo" src={logo} alt=""></img>
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} textColor="#ffff" indicatorColor="secondary">
                  <Tab to="/staff_home" LinkComponent={Link} label="Dashboard" />
                  <Tab to="/staff_dash" LinkComponent={Link} label="Employee" />
                  <Tab to="/dashshow" LinkComponent={Link} label="Attendance" />

                
                 
                </Tabs>
              </Box>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={1}>
              <Box display='flex'>
                  <Button to="/login" LinkComponent={Link} sx={{marginLeft: 1 , background: 'rgba(180,58,58,1)'}} variant="contained">SignOut</Button>
              </Box>
            </Grid>
          </Grid>}
        </Toolbar>
      </AppBar>
    );
};

export default Navbar

