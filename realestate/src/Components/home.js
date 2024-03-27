import React from 'react'
import { Container, Link, TextField } from '@mui/material'
import banner from './Image/pic/banner.png'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import SavedSearch from '@mui/icons-material/SavedSearch';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




function home (){
  return (
    <>
      <div style={{ position: 'relative', width: '1510px', height: '800px' }}>
  <img src={banner} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
    <h1 style={{ fontSize: 60, fontWeight: 'bold' }}>Search Your Next <br/> Home</h1>
    <p>Find new & featured property located in your local city.</p><br/><br/><br/>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} style={{ width: '1300px'}}>
         <Item style={{height:130}}>
              <Stack direction='row' spacing={0}>
                  <Item style={{width:'260px'}}>
                    <h3 >Location / City</h3>
                    <TextField label="Enter location or city" variant="outlined" style={{width:250}}/>
                  </Item>
                  <Item style={{width:'260px'}}>
                    <h3>Property Type</h3>
                    <TextField label="Enter Property Type" variant="outlined" style={{width:250}}/>
                  </Item>
                  <Item style={{width:'260px'}}>
                    <h3>Price Range</h3>
                    <TextField label="Enter Price Range" variant="outlined" style={{width:250}}/>
                    </Item>
                  <Item style={{width:'260px'}}>
                    <h3>Sqt</h3>
                    <TextField label="Enter Sqt Range" variant="outlined" style={{width:250}}/>
                    </Item>
                  <Link to = '/home' style={{color:'GrayText'}}>
                  <SavedSearch style={{width:80, height:80, marginTop:35 , marginLeft:30, text:'Search'}} />
                  </Link>
              </Stack>
         </Item>
        </Grid>
      </Grid>
    </Box>
  </div>
</div>

    </>
  )
}

export default home