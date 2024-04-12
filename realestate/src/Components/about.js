import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import backgroundImage from './Image/About.png';
import subcon from './Image/immio.jpg';
import { Link } from 'react-router-dom';

const Item3 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Item1 = styled(Paper)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}));

const Item2 = styled(Paper)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundImage: `url(${subcon})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function About() {
  return (
    <>
    <br/><br/><br/><br/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item1 style={{ height: 350, width: 1500 }}>
            </Item1>
          </Grid>
          <Container>
            <br /><br />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Item>
                  <Typography style={{ textAlign: 'left', marginLeft: 30, color: '#236135', fontSize: 35, fontWeight: 'bold' }}>Our Agent Story</Typography>
                  <Typography style={{ textAlign: 'left', marginLeft: 30, color: '#A3B6A8', fontSize: 20 }}>Check out our company story and work process</Typography><br />
                  <Typography style={{ textAlign: 'left', marginLeft: 30, color: '#0E100F', fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip.
                  </Typography><br /><br />

                  <Stack spacing={2} direction="row">
                    <Link to= '/contactus'>
                    <Button variant="contained" style={{ marginLeft: 30, width: 150, borderRadius: 10, height: 40 }} >More About Us</Button>
                    </Link>
                   
                  </Stack>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item2 style={{ height: 365 }} />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Box>
      <br /><br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Grid item xs={12}>
                <Item3 style={{ backgroundColor: '#92D378' }}>
                  <Grid container>
                    <Grid item xs={6} sx={{ flexGrow: 1 }}>
                      <Item3 style={{ backgroundColor: '#92D378', borderLeftColor: 'ActiveBorder' }}>
                        <Typography style={{ color: 'black', fontSize: 30, fontWeight: 'bold', marginLeft: 35 }}>Do You Have Questions ?</Typography>
                        <Typography style={{ color: 'black', fontSize: 15, marginLeft: 35 }}>We'll help you to grow your career and growth.</Typography>
                      </Item3>
                    </Grid>
                    <Grid item xs={6} sx={{ flexGrow: 1 }}>
                      <Item3 style={{ backgroundColor: '#92D378', color: 'white', fontSize: '15' }}>
                        <Stack direction="row" spacing={2}>
                        <Link to= '/contactus'>
                          <Button variant="contained" endIcon={<SendIcon />} style={{ backgroundColor: 'white', color: 'black', height: 68, width: 400, fontSize: 20, borderRadius: 15, marginLeft: 50 }}>
                            Contact Us Today
                          </Button>
                        </Link>  
                        </Stack>
                      </Item3>
                    </Grid>
                  </Grid>
                </Item3>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default About;
