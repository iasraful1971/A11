import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeProducts = ({product}) => {
    const {name , url , description,  price , _id} = product;
    return (
        <Grid item md={4} xs={12}>
             <Paper sx={{padding:'24px'}} elevation={2} >


           <img style={{width:'350px'  , height:'300px'}} src={url} alt="" />
            <Typography sx={{color:'red', fontWeight:'bold', fontSize:'18px' , padding:'10px 0' ,}}  variant="body2" color="text.secondary">
                {name}
           </Typography>
            
            <Typography variant="body2" color="text.secondary">
                {description}
           </Typography>
            <Typography sx={{color:'green', fontWeight:'bold', fontSize:'15px' , padding:'10px 0' ,}}  variant="body2" color="text.secondary">
               $ {price}
           </Typography>
        <Link to={`/products/${_id}`}>
        
        <Button style={{background:'salmon', padding:'10px 20px' , margin:'15px 0' ,border:'none'}}>purches now</Button>
        </Link>

            </Paper>
      </Grid>
    );
};

export default HomeProducts;