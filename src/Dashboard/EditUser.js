import { Button, TextField } from '@mui/material';
import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { Base } from '../Base/Base';

const EditUser = ({user, setUserdata}) => {
    const history = useHistory();
    const {id} = useParams();
    const usersss = user[id];
    const [editid, setEditId]= React.useState("")
    const [ImageURL ,  setUserImage]=React.useState("")
    const [Name ,   setUserName]=React.useState("")
    const [Email ,  setUserEmail]=React.useState("")
    const [Details ,setUserDetails]=React.useState("")
    const [DofB ,   setUserDate]=React.useState("")


    useEffect(()=>{

        
        setEditId(usersss.id)
        setUserImage(usersss.ImageURL)
        setUserName(usersss.Name)
        setUserEmail(usersss.Email)
        setUserDetails(usersss.Details)
        setUserDate(usersss.DofB)
    },[usersss.id,usersss.Details,usersss.ImageURL,usersss.Name,usersss.DofB, usersss.Email]);
    function updateUser (){

        const editUser = user.findIndex((STUD)=>STUD.id === editid);

        // we need the updated object
        const updatedObj ={
            ImageURL,
            Name,
            Email,
            Details,
            DofB,
        }
        user[editUser] = updatedObj;
        
        //set the user data
        setUserdata([...user]);
        setUserName("")
        setUserImage("")
        setUserDetails("")
        setUserEmail("")
        setUserDate("")
        history.push("/userlist")
            
            
    }

  return (

     <Base
        title="Edit a User"
        description="You Can See All Your User List Here"
        >
        <div className='input-section'>
        
        <TextField fullWidth label="Enter The Name" id="fullWidth" 
        onChange={(Event)=>setUserName(Event.target.value)}
        value={Name}
        />
        <TextField fullWidth label="Enter The Image-URL" id="fullWidth"
        onChange={(Event)=>setUserImage(Event.target.value)}
        value={ImageURL} 
        />
        <TextField fullWidth label="Enter The Email-Id" id="fullWidth"
        onChange={(Event)=>setUserEmail(Event.target.value)}
        value={Email} 
        /> 
        <TextField fullWidth label="Enter The Details" id="fullWidth"
        onChange={(Event)=>setUserDetails(Event.target.value)}
        value={Details}
        />
        <TextField fullWidth label="Enter The Date" id="fullWidth" 
        onChange={(Event)=>setUserDate(Event.target.value)}
        value={DofB}
        />
        
        <Button variant="contained" color="success" 
        onClick={updateUser}
        >
            Update Data
        </Button>
        
        </div>
        </Base>

  )
}

export default EditUser