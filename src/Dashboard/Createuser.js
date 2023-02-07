import { Button, TextField } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Base } from '../Base/Base'

const Createuser = ({user, setUserdata}) => {
    
    const history = useHistory();
    const [ImageURL ,  setUserImage]=React.useState("")
    const [Name ,   setUserName]=React.useState("")
    const [Email ,  setUserEmail]=React.useState("")
    const [Details ,setUserDetails]=React.useState("")
    const [DofB ,   setUserDate]=React.useState("")

    const addNewUser=()=>{
        
        const newUser ={
            ImageURL,
            Name,
            Email,
            Details,
            DofB,
        }
            setUserdata([...user, newUser]);
            setUserImage("")
            setUserName("")
            setUserEmail("")
            setUserDetails("")
            setUserDate("")
            

            history.push("/userlist")
        };
  return (

    <Base
        title="User List"
        description="U Can See All Your User List Here"
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
        
        <Button variant="contained" color="secondary" 
        onClick={addNewUser} 
        >
            Add Data
        </Button>
        
        
        </div>
        </Base>
    )
}
export default Createuser