import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Navigation (props){
    const [click, setClick] = useState (false);
    return(
        <nav className = "navBar">
          <div id = "navBarContainer">
            <Link to = "./Main.js">MAIN</Link>
            <Link to = "./BabuFrik.js">HEADER</Link>
            <Link to = "./BabyYoda.js">CATS</Link>
            <Link to = "./Header.js">TUTORING</Link>
          </div>
        </nav>
    )
}

export default Navigation; 