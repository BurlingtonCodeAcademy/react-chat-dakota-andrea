//importing React ----------------------------------------------------
import React from "react";
//importing the style sheet-------------------------------------------
import "../App.css";
//importing route components -----------------------------------------
import Main from "./Main";
import BabuFrik from "./BabuFrik";
import BabyYoda from "./BabyYoda";
import Navigation from "./Navigation";
import Header from "./Header";
//browser router, React router DOM, to switch view using routes---------
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import React, {useState, useEffect} from "react"


function App() {
  //this function allows this app to use React router DOM and have access to
  //each route component.
  return (
    <Router>
    <div className="App">
        <Header/>
        <Main/>
        <Navigation/>
        <Switch>
        <Route exact path="/">
        <Main/>
        </Route>
          <Route path="/main" component={Main}/>
          <Route path="/babufrik" component={BabuFrik} />
          <Route path="/babyyoda" component={BabyYoda} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
