import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Main (props) {

    return (
        <div id = 'mainContainer'> 
        <h1>hello</h1>

        <div id = 'chat-display'>    
         
         <div id = 'message-input'>

         </div>

         <button> Send </button>
         <button> Refresh </button>

        </div>
        
    

        </div>
    )

}

export default Main; 