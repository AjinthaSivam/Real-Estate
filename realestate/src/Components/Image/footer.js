import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const FooterContainer = styled('footer')({
 position:'relative',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#020a3b',
  padding: '20px',
  zIndex: 1000, 
});

function Footer() {
  return (
    <FooterContainer>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs>
            <Item>
              <p style={{ display: 'flex', alignItems: 'center', textAlign: 'center', fontSize: 20 }}> GET IN TOUCH | CONTACT </p>
              <hr />

              <p style={{ textAlign: 'left', marginLeft: 20, color: 'green' }}>
                <a href="tel:+94766295876" style={{ textDecoration: 'none', color: 'green' }}>+94766295876</a><br />
                <a href="tel:+94781490537" style={{ textDecoration: 'none', color: 'green' }}>+94781490537</a>
              </p>
              <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: 10 }}>
                  <FacebookIcon />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: 10 }}>
                  <TwitterIcon />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
              </div>
            </Item>
          </Grid>
          <Grid item xs={9} >
            <Item style={{ height: 50, marginTop: 60 }} ></Item>
          </Grid>
        </Grid>
      </Box>
    </FooterContainer>
  );
}

export default Footer;
