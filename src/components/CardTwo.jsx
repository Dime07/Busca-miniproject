import "../CSS/CardTwo.css"

function CardTwo({name,company,email}){
    return(
        <div className="CardTwo">
            <div className="bio">
                <h3>{name}</h3>
                <h5>{company}</h5>
                <div className="line">

                </div>
            </div>
            <p className="temp-email">{email}</p>
        </div>
    )
}

export default CardTwo;