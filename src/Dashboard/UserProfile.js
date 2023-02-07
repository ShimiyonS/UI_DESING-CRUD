import React from 'react'
import { useParams } from 'react-router-dom';
import { Base } from '../Base/Base'

const UserProfile = ({user}) => {
    const {id} = useParams();
    const users = user[id];

  return (
    <Base
    title = "User Profile"
    description= "Individual User Details"
    >
        <div>
            <h1>Student-Profile</h1>
            <h2>User Name        :{ users.Name}</h2>
            <br/>
            <p>Mail-Id               :{ users.Email}</p>
            <p>User Details             :{ users.Details}</p>
            <p>Date of Birth   :{ users.DofB}</p>
        </div>
    </Base>
  )
}

export default UserProfile