import "./GamingCard.css"
import {Btn2} from "../Btn/Btn";


const GamingCard = (props) => {
    return (
        <>
            <div className="Gaming-card">
                <img src={props.image} alt="gaming image" />
                <div className="data">
                    <h5>{props.data}</h5>
                    <p>Sandbox</p>
                </div>
                <div className="hours-play">
                    <h5>Hours Play</h5>
                    <p>{props.hours}</p>
                </div>
                <div className="state">
                    <h5>Currently</h5>
                    <p>{props.state}</p>
                </div>
                <Btn2 name="Download" />
            </div>
        </>
    )
}

export default GamingCard;
