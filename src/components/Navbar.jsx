import "../CSS/Component.css";
import {Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="Navbar">
            <div className="menu">
                <p><Link to="/">Input</Link></p>
                <p><Link to="/card">Result</Link></p>
            </div>
        </div>
    )
}

export default Navbar;