import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Base } from '../Base/Base';
import { Button, CardActions} from '@mui/material';
import { useHistory } from 'react-router-dom';


const UserList = ({user, setUserdata}) => {
    const history=useHistory();

        function deteleUserData (userID){
            const selectUser = user.filter((users, id) =>id !==userID)
            setUserdata(selectUser);
        }
     

    return (
        <Base
        title="User List"
        description="You Can See All Your User List Here"
        >
        <div className='containers'>


        <div className='card-containers'>
        {user.map((values, idx)=>(
       
        <Card sx={{ maxWidth: "auto" }}  key={idx}className="card">
        <CardHeader
            avatar={
                <Avatar alt="Remy Sharp" src={values.ImageURL}/>
            }
            action={
                <IconButton aria-label="settings">
                <MoreVertIcon />
                </IconButton>
            }
        title={values.Name}
        subheader={values.DofB}
        />
        <CardMedia
            component="img"
            height="128"
            width="128"
            src={values.ImageURL}
            alt="Paella dish"
            />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            {values.Details}
            </Typography>
        </CardContent>
        <CardActions>
        <div className='card-button'>
        <Button color="error"
        onClick={()=>deteleUserData(idx)}
        >
            Delete
        </Button>
        <Button
        onClick={() => history.push(`/edit/${idx}`)}
        >
            Edit
        </Button>
        <Button color="secondary" onClick={()=>history.push(`/Profile/${idx}`)}>
            Show Details
        </Button>
        </div>
        </CardActions>
        </Card>
        ))}
        </div>
        </div>
        </Base>
    )
}

export default UserList