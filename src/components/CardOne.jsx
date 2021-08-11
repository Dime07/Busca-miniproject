import "../CSS/CardOne.css"
function CardOne({name,company,email}){
    return(
        <div className="CardOne">
            <div className="bio">
                <h3>{name}</h3>
                <h5>{company}</h5>
            </div>
            <p className="temp-email">{email}</p>
        </div>
    )
}

export default CardOne;