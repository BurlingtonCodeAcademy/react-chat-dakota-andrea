import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Navigation (props) {
    const [click, setClick] = useState (false);

    return (
        <nav className = 'navbar'>

        <div id = 'navContainer'>
        <Link to = '/main'> Main </Link>
        <Link to = '/tutoring'> Tutoring </Link>
        <Link to = '/cats'> Hobbies  </Link>
        

        </div>

        
        </nav>
    )

}

export default Navigation; 