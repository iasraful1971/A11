import { Grid, Rating } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';


const SingleTestimonial = (props) => {
  const {name , description , url , location ,rating } = props.tes;
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={1} sx={{p:4, textAlign:'left'}} >
                <Typography sx={{fontSize:'16px'}}>
                    {description}
                </Typography>
                <Grid sx={{display:'flex' ,justifyContent:'center' , alignItems:'center' ,py:3}}>
                    <Grid md={6} xs={6}>
                        <img style={{width:'150px' ,height:'120px'}} src={url} alt="" />
                    </Grid>
                    <Grid md={6} xs={6} >
                       
                        <Typography sx={{fontWeight:'600' , color:'purple' , fontSize:'18px'}}>
                         {name}
                         </Typography>
                        <Typography sx={{fontWeight:'400' , color:'black' , fontSize:'16px'}}>
                         {location}
                         </Typography>
                            <Rating readOnly defaultValue={rating}></Rating>
                    </Grid>
                  
                </Grid>
            </Paper >
           
        </Grid>
    );
};

export default SingleTestimonial;