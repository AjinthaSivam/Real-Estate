import React from 'react'
import Navbar from './navbar'
import Footer from './Image/footer';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Container, Stack, Typography } from '@mui/material';

import img1 from './Image/serviceIcon/h1.png'
import img2 from './Image/serviceIcon/h2.png'
import img3 from './Image/serviceIcon/h3.png'
import img4 from './Image/serviceIcon/h4.png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Services (){
  return (
    <>
 
   <div>
    <Container>
        <br/><br/> <br/><br/>
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={10} >
                <Grid xs={12} >
                <Item>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 5, sm: 2, md: 8 }}>
                        <Item style={{width:220}}>
                            <img src={img1} style={{width:80, height:80}}/>
                            <Typography style={{fontSize:15, fontWeight:'bold'}}>Lands</Typography>
                            <Typography style={{fontSize:15}}>122 Property</Typography>
                        </Item>
                        <Item style={{width:220}}>
                            <img src={img2} style={{width:80, height:80}}/>
                            <Typography style={{fontSize:15, fontWeight:'bold'}}>Villa & Condo</Typography>
                            <Typography style={{fontSize:15}}>122 Property</Typography>
                        </Item>
                        <Item style={{width:220}}>
                            <img src={img3} style={{width:80, height:80}}/>
                            <Typography style={{fontSize:15, fontWeight:'bold'}}>Family House</Typography>
                            <Typography style={{fontSize:15}}>122 Property</Typography>
                        </Item>
                        <Item style={{width:220}}>
                            <img src={img4} style={{width:80, height:80}}/>
                            <Typography style={{fontSize:15, fontWeight:'bold'}}>Family House</Typography>
                            <Typography style={{fontSize:15}}>122 Property</Typography>
                        </Item>
                        
                   </Stack>
                </Item>
                </Grid>
            </Grid>  
        </Box>
    </Container>
   
   </div>
   </>
  )
}
export default Services
