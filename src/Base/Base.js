import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom';

export const Base = ({title, description, children}) => {

    const history = useHistory();

    const logoutMethod = () => {
        localStorage.removeItem("user-name")
        history.push("/");
    }


  return (
    <div className='main-conponent'>
        <AppBar position='static'>
            <Toolbar variant='dense'>
                <Button color="inherit" onClick={()=>history.push("/")}>Dashboard</Button>
                <Button color="inherit" onClick={()=>history.push("/userlist")}>List Users</Button>
                <Button color="inherit" onClick={()=>history.push("/createUser")}>Create Users</Button>
                <Button color='inherit' onClick={()=>history.push("/register")}>Login 
                </Button>
                <Button color='inherit'onClick={logoutMethod}>Logout</Button>
            </Toolbar>

        </AppBar>
        <header>
        <h1 className='heading'>
        {title}
        </h1>
        </header>
        <main className='main-segment'>
            <h2>
                {description}
            </h2>
      
            <div className='children-segment'>  
            {children}
            </div>
  
        </main>
    </div>
  )
}
