import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


import backgroundImage from './Image/about.jpg';

const Item = styled(Paper)(({ theme }) => ({
  position: 'relative', 
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: { height: 200, width: 1500 }, 
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center', 
}));

const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(10, 32, 50, 0.67)', 
});

function About() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
       
          <Item style={{ height: 200, width: 1500 }}>
          <Overlay /> 
            <Typography style={{ color: 'white', textAlign: 'left', fontSize: 40, marginLeft: 60, marginTop: 50 , fontStyle:'inherit'}}> About us?</Typography>
            <Typography style={{ color: 'black', textAlign: 'left', fontSize: 60, marginLeft: 80 }}> About Us - Who We Are?</Typography>
           
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default About;
