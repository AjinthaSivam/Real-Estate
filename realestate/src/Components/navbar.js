import { AppBar, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import logo from './Image/serviceIcon/logova.png'

function Navbar(){
  return (
    <AppBar position='fixed' style={{padding:15, backgroundColor:'white'}} >
      <Stack direction={'row'} spacing={2}>
        <Link style={{textDecoration:'none', marginRight:40}}>
            <img src={logo} style={{width:100, height:30}}/>
        </Link>
        <Link to='/' style={{color:'black', textDecoration:'none', marginRight:40}}>
          <Typography style={{fontSize:20, fontWeight:'bold'}}>Home</Typography>
        </Link>
        
        <Link to='/service' style={{color:'black' , textDecoration:'none', marginRight:50}}>
          <Typography style={{fontSize:20, fontWeight:'bold'}}>Services</Typography>
        </Link>
        <Link to='/about' style={{color:'black' , textDecoration:'none' , marginRight:60}}>
          <Typography style={{fontSize:20, fontWeight:'bold'}}>About</Typography>
        </Link>
        <Link to='/pricing' style={{color:'black' , textDecoration:'none', marginRight:70}}>
          <Typography style={{fontSize:20, fontWeight:'bold'}}>Pricing</Typography>
        </Link>
        <Link to='/contactus' style={{color:'black' , textDecoration:'none'}}>
          <Typography style={{fontSize:20, fontWeight:'bold'}}>Contact us</Typography>
        </Link>
      </Stack>
    </AppBar>
  );
}

export default Navbar;