import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function BabyYoda() {
  return (
    <div className="yodaChatWrapper">
      <h1>Hello from Bebby</h1>
      <div className="yodaChatWindow">
        <div className="yodaChatInput">
          <h1>Hello from Babu Input</h1>
          <form action="submit">
            <input type="text" id="username"></input>
            <input type="text" id="message"></input>
            <input type="submit" placeholder="submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BabyYoda;
