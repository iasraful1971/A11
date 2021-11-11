import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
const Testimonial = () => {
    const [reviews , setReview]= useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return (
        <>
        <Container sx={{my:5}}>
        <Typography sx={{fontWeight:'600', textAlign:'left' , color:'blue' , fontSize:'16px', padding:'10px 0'}}>
                       REVIEWS
        </Typography>
        <Typography sx={{marginBottom:'30px', fontWeight:'800', textAlign:'left' , color:'#333' , fontSize:'30px'}}>
                       What's Our Clinets <br /> Says
        </Typography>
        <Grid container spacing={2}>
            {
                   reviews.map(tes => <SingleTestimonial
                   tes={tes}
                   ></SingleTestimonial>)
            }
        
      </Grid>
        </Container>
       </>
    );
};

export default Testimonial;