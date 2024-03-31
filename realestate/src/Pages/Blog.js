import React, { useEffect, useState } from "react";
import { Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';
import Header from '../Components/Admin/Header'

const CustomCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    marginTop: theme.spacing(5),
    position: 'relative', // Added for positioning the image overlay
}));

const ImageOverlay = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const Image = styled('img')({
    width: '100%', // Ensure the image takes up the full width of the card
    height: '200px', // Set a fixed height for uniformity, adjust as needed
    objectFit: 'cover', // Maintain aspect ratio and cover the entire space
});


const TextOverlay = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '20%',
    transform: 'translateX(-50%)',
    color: '#FFFFFF',
    fontSize: '3rem',
    zIndex: 1
}));

function Blog() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/data');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper style={{ height: 500, backgroundImage: "url('https://th.bing.com/th/id/R.82528ef3c792943ccca71640b985bb83?rik=zyRTARfC%2fVQY5A&riu=http%3a%2f%2fwww.kingstonherveybay.com.au%2fthemes%2fdefault%2fbasemedia%2fcontent%2fsubpage-rotator-images%2fland-for-sale-banner.jpg&ehk=JYdJSm1s3y%2b0lU1wSfG505y1sqjptRdnsoXMHFhbGcE%3d&risl=&pid=ImgRaw&r=0')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <TextOverlay variant="h4">Blog Grid - Our Blogs</TextOverlay>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {data.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <CustomCard>
                                    <Image src={item.image} alt="Image" />
                                    {/* <ImageOverlay>
                                        <Typography variant="h6" style={{ color: '#fff' }}>Image Overlay Text</Typography>
                                    </ImageOverlay> */}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Address: {item.address}<br />
                                            Sqft: {item.sqft}<br />
                                            Description: {item.description}<br />
                                            Price: {item.price}<br />
                                            Contact Number: {item.contact}<br />
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

export default Blog;
