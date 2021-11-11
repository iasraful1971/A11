import { Alert, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

const AdminPanel = () => {
    
    const [email , setEmail]  =useState('');
    const [success , setSuucess] = useState(false);
    
 
        const handleBlur = e =>{
            setEmail(e.target.value);

        }
    const handleAdminSubmit  =e => {
        const user = {email}
        fetch('http://localhost:5000/users/admin' , {
            method:'PUT',
            headers:{
                
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                    setSuucess(true);
                
                    console.log(data);
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make Admin </h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField 
            onBlur={handleBlur}
            style={{width:'30%'}} id="standard-basic" label="email" type="email" variant="standard" /> <br/> <br/>
                <Button type="submit" variant="contained">make admin</Button>
            </form>
            {success && <Alert severity="success">successfully! make an admin</Alert>}
                        
        </div>
    );
};

export default AdminPanel;