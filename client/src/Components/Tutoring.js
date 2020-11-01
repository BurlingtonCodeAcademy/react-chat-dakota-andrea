import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Projects (props) {

    return (
        <div id = 'projectsContainer'>

            <div id = 'projectsMini'>
            <h1 id = 'projectsTitle'> My Projects On GitHub! </h1>
            <ul>
                <li>https://github.com/BurlingtonCodeAcademy/tic-tac-toe-andrea-jonathan</li>
                <li>https://github.com/BurlingtonCodeAcademy/remock-CoffeeScript1</li>
                <li>Zorkington Placeholder, link is not in my GitHub account</li>
    
            </ul>
            </div>

        </div>
    )

}

export default Projects; 