import { AppBar, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <AppBar position='static' style={{padding:20}}>
      <Stack direction={'row'} spacing={2}>
        <Link to='/' style={{color:'white', textDecoration:'none', marginRight:40}}>
          <Typography style={{fontSize:20, fontWeight:'bold'}}>Home</Typography>
        </Link>
        
        <Link to='/service' style={{color:'white' , textDecoration:'none', marginRight:50}}>
          <Typography style={{fontSize:20, fontWeight:'bold'}}>Services</Typography>
        </Link>
        <Link to='/about' style={{color:'white' , textDecoration:'none' , marginRight:60}}>
          <Typography style={{fontSize:20, fontWeight:'bold'}}>About</Typography>
        </Link>
        <Link to='/pricing' style={{color:'white' , textDecoration:'none'}}>
          <Typography style={{fontSize:20, fontWeight:'bold'}}>Pricing</Typography>
        </Link>
      </Stack>
    </AppBar>
  );
}

export default Navbar;