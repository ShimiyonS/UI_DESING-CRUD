import { Route, Switch } from 'react-router-dom';
import './App.css';
import * as React from 'react';
import Createuser from './Dashboard/Createuser';
import { Dashboard } from './Dashboard/Dashboard';
import UserList from './Dashboard/UserList';
import { data } from './Data/Data';
import EditUser from './Dashboard/EditUser';
import UserProfile from './Dashboard/UserProfile';
import AuthPage from './Dashboard/AthPage';
function App() {
  const [user , setUserdata]=React.useState(data);
  return (
    <div className="App">
    <Switch>

      <Route exact path="/">
        <Dashboard/>
      </Route>
    
      <Route path="/userlist">
        <UserList
          user={user}
          setUserdata = {setUserdata}
        />
      </Route>
      
      <Route path ="/createUser" >
        <Createuser
          user={user}
          setUserdata = {setUserdata}
        />
      </Route>

      <Route path= "/register">
        <AuthPage/>
      </Route>

      <Route path ="/edit/:id" >
        <EditUser
          user={user}
          setUserdata = {setUserdata}
        />
      </Route>
      <Route path ="/Profile/:id">
      <UserProfile
       user={user}
          setUserdata = {setUserdata}
      />
      </Route>
    </Switch>
    
    </div>
  );
}
export default App;
