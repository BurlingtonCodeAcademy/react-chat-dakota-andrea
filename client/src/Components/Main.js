import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Main() {
  return (
    <div className="mainChatWrapper">
      <div className="mainChatWindow">
        <h1>Hello from main chat Window</h1>
      </div>
      <div className="mainChatInput">
        <h1>Hello from main chat Input</h1>
        <form action="submit">
          <input type="text" id="username"></input>
          <input type="text" id="message"></input>
          <input type="submit" placeholder="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Main;
