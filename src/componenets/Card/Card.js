import "./Card.css"

const Card = (props) => {
    return (

        <div className="card">
            <img src={props.img} alt="popular game" />
            <div className="content-one">
                <p>{props.name}</p>
                <p>
                    <i className="bx bxs-star"></i>{props.rate}
                </p>
            </div>
            <div className="content-two">
                <p>{props.category}</p>
                <p>
                    <i className="bx bxs-cloud-download"></i>{props.download}
                </p>
            </div>
        </div>
    )
}

export default Card
