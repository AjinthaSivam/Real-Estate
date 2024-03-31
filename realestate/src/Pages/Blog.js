import React from "react";
import { Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Header from "../Components/Admin/Header";

const CustomCard = styled(Card)(({ theme }) => ({
    maxWidth: 345, // Adjust as needed
  }));

const Item = styled(Paper)(({ theme }) => ({
    backgroundImage: "url('https://th.bing.com/th/id/R.82528ef3c792943ccca71640b985bb83?rik=zyRTARfC%2fVQY5A&riu=http%3a%2f%2fwww.kingstonherveybay.com.au%2fthemes%2fdefault%2fbasemedia%2fcontent%2fsubpage-rotator-images%2fland-for-sale-banner.jpg&ehk=JYdJSm1s3y%2b0lU1wSfG505y1sqjptRdnsoXMHFhbGcE%3d&risl=&pid=ImgRaw&r=0')", // Replace 'your_image_url_here' with the actual URL of your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Overlay = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 128, 0, 0.5)', // Green overlay color with 50% opacity
  }));

  const TextOverlay = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '20%',
    transform: 'translateX(-50%)', // Center horizontally
    color: '#FFFFFF', // Text color
    fontSize: '3rem', // Adjust font size as needed
    zIndex: 1
  }));

function Blog () {
    return (
    <>
        <Header/>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item style={{height:500}}>
                        
                        <TextOverlay variant="h4">Blog Grid - Our Blogs</TextOverlay>
                    </Item>
                </Grid>
            </Grid>
            
        </Box>

        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {[1, 2, 3].map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item}>
                            <CustomCard>
                                <img src={`your_image_url_${item}.jpg`} alt={`Image ${item}`} style={{ width: '100%', height: 'auto' }} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Item {item}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price: $10
                                    </Typography>
                                </CardContent>
                            </CustomCard>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    
    </>
    )
}

export default Blog