import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeProducts from '../HomeProducts/HomeProducts';
const HomeProduct = () => {
    const [products , setProduct] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    if(products.length === 0) {
        return <CircularProgress />
      }
      
    return (
       <>
   
       <Container>
            <h2 style={{padding:'20px 0'}}>Our Collections</h2>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
                {
                    products.slice(0, 6).map( product => <HomeProducts
                      key= {product._id}
                       product ={product}
                    ></HomeProducts>)
                }
      </Grid>
                <Link to="/products">
                  <button style={{background:'#111' , color:'#fff', padding:'10px 30px' , margin:'20px 0'}}>see more</button>
                </Link>
      
    </Box>
       </Container>
      
       </>
       
    );
};

export default HomeProduct;


