import "./MostPopluarStreamCard.css"

const MostPopluarStreamCard = (props) => {
    return (
        <div className="most-popluar-card-stream">
            <img src={props.image} className="main-image-stream" alt="main-image" />
            <div className="content-stream-card">
                <img src={props.profile} alt="profile-image" className="profile-image-stream" />
                <div>
                    <p><i className='bx bxs-check-circle' ></i>{props.name}</p>
                    <h3>{props.description}</h3>
                </div>
            </div>
        </div>
    )
}

export default MostPopluarStreamCard;
