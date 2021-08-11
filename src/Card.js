import "./Card.css";
import CardOne from "./components/CardOne";
import CardTwo from "./components/CardTwo";
import BtnNav from "./components/BtnNav";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import domtoimage from 'dom-to-image';
function Card({bio}){
    function download(){
        domtoimage.toPng(document.getElementById("download"))
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'my-image-name.jpeg';
            link.href = dataUrl;
            link.click();
        });
    }
    return(
        <div className="Card">
            <BrowserRouter>
            <h2>Here is your design</h2>
            <BtnNav />
                <Switch>
                    <div className="content-wrap">
                        <div className="template" id="download">
                            <Route path="/design1" exact>
                                <CardOne name={bio[0].name} company={bio[0].company} email={bio[0].email}/>
                            </Route>
                            <Route path="/design2" id="download">
                                <CardTwo name={bio[0].name} company={bio[0].company} email={bio[0].email}/>
                            </Route>
                        </div>
                    </div>   
                </Switch>
                <input type="submit" value="download" onClick={download}></input>
            </BrowserRouter>

        </div>
    )
}

export default Card;