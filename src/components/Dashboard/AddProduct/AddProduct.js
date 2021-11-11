import { Alert } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import add from '../../../images/add.jpg';
const AddProduct = () => {
    const { register, handleSubmit , reset} = useForm();
    const [success , setSuccess] =useState(false)

    const onSubmit = data => {
           console.log(data);
          axios.post('http://localhost:5000/products', data)
         .then(res => {
            console.log(res);
            reset();
            if(res.data.insertedId){
           
               setSuccess(true)

            }
            
        })
        
    };

    return (
       <div className="d-flex">
            <div className="form-area">
              <h2>Add product</h2>
                <img className="img-fluid" src={add} alt="" />
                <form onSubmit={handleSubmit(onSubmit)}>
                 <input placeholder="product name" {...register("name", { required: true, maxLength: 100 })} />
                 <input placeholder="product photo url" {...register("url")} />
                <textarea placeholder="product details " {...register("description")} />
             <input placeholder="price" type="number" {...register("price")} />
            <input type="submit" />
         </form>
        {
            success && <Alert severity="success">successfully! added yor service</Alert>
        }
        </div>
       </div>
    );
};

export default AddProduct;