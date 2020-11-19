//importing React ----------------------------------------------------
import React from "react";
//importing the style sheet-------------------------------------------
import "./App.css";
//importing route components -----------------------------------------
import Main from "./Components/Main";
import Tutoring from "./Components/Tutoring";
import Cats from "./Components/Cats";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
//browser router, React router DOM, to switch view using routes---------
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import React, {useState, useEffect} from "react"

function App() {
  //this function allows this app to use React router DOM and have access to
  //each route component.
  return (
    
      {/* <Router>
        <Header />
        <Switch>
          <Route path="/main" render={() => <Main />} />
          <Route exact path="/" render={() => <Main />} />
          <Route path="/tutoring" render={() => <Tutoring />} />
          <Route path="/cats" render={() => <Cats />} />
        </Switch>
      </Router>
      <Navigation /> */}
    </div>
  );
}

export default App;
