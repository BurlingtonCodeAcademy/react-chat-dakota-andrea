// ----- Imports
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

//  ---- Baby Yoda chat room function
function BabyYoda(){
    return(
        <div className= "yodaChatWrapper">
             <h1>Hello from Bebby</h1>
            <div className= "yodaChatWindow">
            </div>
            <div className= "yodaChatInput">
                <h1>Hello from BebbyYoda Input</h1>
                </div>
        </div>
    )

}

//-----exporting component
export default BabyYoda; 