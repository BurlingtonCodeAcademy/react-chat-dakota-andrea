import React from 'react';
import './App.css';
import Main from './Components/Main'
import Tutoring from './Components/Tutoring'
import Cats from './Components/Cats'
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, {useState, useEffect} from "react"

function App() {
  const [users, setUsers] = useState(null)

  useEffect(()=>{
    if (!contacts){
      fetch("/users")
      .then(res => res.json())
      .then(users =>{
        setUsers(users);
      })
    }
  }, [])   

    return (
  
      <div className="App">
        <Router>
          <Navigation/>
          <Switch>
            <Route path='/main' render={() => <Main/>}/>
            <Route exact path="/" render={ ()=><Main/>}/>
            <Route path='/tutoring' render={() => <Tutoring/>}/>
            <Route path='/cats' render={() => <Cats/>}/>
        
          </Switch>
        </Router>
        <Header/>

        {users?(
          users.map((user) =>(
            <div className = "user" key = {user.id}>

              <p>{user.name}</p>
              <p>{user.currentRoom}</p>
              </div>
          ))
        )
        : } 
        
      </div>
  
    );
  }
  
  export default App;
  
  