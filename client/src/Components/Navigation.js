//------Imports 
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

//----- Function for the nav bar
function Navigation() {
  // const [click, setClick] = useState (false);
  return (
    <div>
      <nav>
        <div className="navBar">
          <Link to="/Main">Main Chat Room</Link>
          <Link to="/BabuFrik">Babu Frik</Link>
          <Link to="/BabyYoda">Baby Yoda</Link>
        </div>
      </nav>
    </div>
  );
}

//--- exporting component 
export default Navigation;
