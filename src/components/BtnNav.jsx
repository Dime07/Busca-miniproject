import "../CSS/Component.css";
import {Link} from "react-router-dom";
function BtnNav(){
    return(
        <div className="btn-wrapper">
            <p><Link to="/design1">Design 1</Link></p>
            <p><Link to="/design2">Design 2</Link></p>
        </div>
    )
}

export default BtnNav;