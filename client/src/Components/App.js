//importing React ----------------------------------------------------
import React from 'react';
//importing the style sheet-------------------------------------------
import './App.css';
//importing route components -----------------------------------------
import Main from './Main'
import Tutoring from './Tutoring'
import Cats from './Cats'
import Navigation from './Navigation';
import Header from './Header';
//browser router, React router DOM, to switch view using routes---------
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import React, {useState, useEffect} from "react"

function App() {

  //this function allows this app to use React router DOM and have access to
  //each route component. 
  return (

      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route path='/main' render={() => <Main/>}/>
            <Route exact path="/" render={ ()=><Main/>}/>
            <Route path='/tutoring' render={() => <Tutoring/>}/>
            <Route path='/cats' render={() => <Cats/>}/>
        
          </Switch>
        </Router>
        <Navigation/>
       
       </div>
      
          );
  }
  
  export default App;
  
  