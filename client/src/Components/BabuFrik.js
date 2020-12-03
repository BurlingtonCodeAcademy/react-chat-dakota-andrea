//---- Imports
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// --- Babu Frik chat room function 
function BabuFrik (){
    return(
        <div className = "babuChatWrapper">
            <h1>Hello from Babu</h1>
            <div className= "babuChatWindow">
                </div>
                <div className = "babuChatInput">
                <h1>Hello from Babu Input</h1>
            </div>
        </div>
    )

}

// ----- component export
export default BabuFrik; 