import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import pOne from '../../../../images/test1.jpg';
import pTwo from '../../../../images/test2.jpg';
import pThree from '../../../../images/test3.jpg';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
const Testimonial = () => {
    
const testimonials =[
    {
        id:1,
        comment:'We would not be a very good review service if we were not willing to share our own client feedback, so why not take 5 and hear from some of our existing dental',name:'jhon Henson',
        location:'England',
        img: pOne
      

    },
    {
        id:2,
        comment:'I can not be a very good review service if we were not willing to share our own client feedback, so why not take 5 and hear from some of our existing dental',name:'Zennifer ',
        location:'Queen , USA',
        img: pThree

    },
    {
        id:3,
        comment:'The mans of would not be a very good review service if we were not willing to share our own client feedback, so why not take 5 and hear from some of our existing ',name:'David Dhren',
        location:'New York',
        img: pTwo
        

    },
]
    return (
        <>
        <Container sx={{my:5}}>
        <Typography sx={{fontWeight:'600', textAlign:'left' , color:'blue' , fontSize:'16px', padding:'10px 0'}}>
                       TESTIMONIALS
        </Typography>
        <Typography sx={{marginBottom:'30px', fontWeight:'800', textAlign:'left' , color:'#333' , fontSize:'30px'}}>
                       What's Our Patients <br /> Says
        </Typography>
        <Grid container spacing={2}>
            {
                   testimonials.map(tes => <SingleTestimonial
                   tes={tes}
                   ></SingleTestimonial>)
            }
        
      </Grid>
        </Container>
       </>
    );
};

export default Testimonial;