import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Navigation (props){
    const [click, setClick] = useState (false);
    return(
        <nav className = "navBar">
          <div id = "navBarContainer">
            <Link to = "./Components/Main.js">MAIN</Link>
            <Link to = "./Components/Cats.js">HEADER</Link>
            <Link to = "./Components/Cats.js">CATS</Link>
            <Link to = "./Components/Cats.js">TUTORING</Link>
          </div>
        </nav>
    )
}

export default Navigation; 