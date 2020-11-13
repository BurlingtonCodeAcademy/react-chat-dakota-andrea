import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Main (props){
    return(
        <div id = "mainChatWrapper">
            <div id = "mainChatWindow">
                <h1>chat</h1>
                <div id = "mainChatInput">
                   <h1>Hello from main</h1>
                </div>
            </div>
        </div>
    )

}

export default Main; 