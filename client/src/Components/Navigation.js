import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';




function Navigation (){
    // const [click, setClick] = useState (false);
    return(
      <div>
        <nav>
          <div className= "navBar">
            <Link to = "/Main.js">Main Chat Room</Link>
            <Link to = "/BabuFrik.js">Babu Frik</Link>
            <Link to = "/BabyYoda.js">Baby Yoda</Link>
          </div> 
        </nav>
        </div>
    )
}

export default Navigation; 