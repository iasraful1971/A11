import { Alert } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import add from '../../../images/review.png';
const Reviews = () => {
    const { register, handleSubmit , reset} = useForm();
    const [success , setSuccess] =useState(false)
    const {user}= useAuth();
    const onSubmit = data => {
           console.log(data);
          axios.post('http://localhost:5000/reviews', data)
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
              <h2>Add your review</h2>
                <img className="img-fluid" src={add} alt="" />
                <form onSubmit={handleSubmit(onSubmit)}>
                 <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 100 })} />
                 <input placeholder="your location" {...register("location", { required: true, maxLength: 100 })} />
                 <input placeholder="your photo url" {...register("url",)} />
                 
                <textarea placeholder="comment here " {...register("description")} />
             <input placeholder="rating" type="number" {...register("rating", { min: 1, max: 5 })} />
            <input type="submit" />
         </form>
        {
            success && <Alert severity="success">successfully! added yor review</Alert>
        }
        </div>
       </div>
    );
};

export default Reviews;