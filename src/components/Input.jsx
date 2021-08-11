import "../CSS/Component.css";
import { useState } from "react";

function Input({send}){
    //data
    const [biodata, setBiodata]= useState();
    //eventhandling
    function handleName(e){
        setBiodata({...biodata, name: e.target.value})
    }
    function handleCompany(e){
        setBiodata({...biodata, company: e.target.value})
    }
    function handleEmail(e){
        setBiodata({...biodata, email: e.target.value})
    }
    function Add(e){
        e.preventDefault();
        send(biodata)
    }
    return(
        <div className="Input">
            <h2>BUSCA</h2>
            <p>place where you can get your own business card for free, we provide free template for you</p>
            <form className="input-wrapper" onSubmit={Add}>
                <input type="text" className="name" placeholder="Your Name" onChange={handleName}/>
                <input type="text" className="company" placeholder="Your Company Name" onChange={handleCompany}/>
                <input type="email" className="email" placeholder="Your Email" onChange={handleEmail}/>

                <input type="submit" className="btn-submit" value="Submit" />
            </form>
        </div>
    )
}

export default Input;