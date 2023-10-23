import "./FeaturedCardGaming.css"

const FeaturedCardGaming = (props) => {
    return (
        <div className="Featured-gaming-card">
            <img src={props.image} alt="gaming featured card image" />
            <div className="content-gaming-card">
                <div className="gaming-featured-card-content">
                    <h3>{props.name}</h3>
                    <p>  <i className="bx bxs-star"></i> {props.rate}</p>
                </div>
                <div className="gaming-featured-card-donwlaods">
                    <p>240K donwloads</p>
                    <p> <i className="bx bxs-cloud-download"></i> {props.download}</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCardGaming
