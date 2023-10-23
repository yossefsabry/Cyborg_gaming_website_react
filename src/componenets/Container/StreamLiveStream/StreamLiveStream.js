import "./StreamLiveStream.css"
import Btn from "../../Btn/Btn"
import ContainerTitle from "../../ContainerTitle/ContainerTitle"
import { Link } from "react-router-dom"

// assists
import img1 from "../../../images/service-01.jpg"
import img2 from "../../../images/service-02.jpg"
import img3 from "../../../images/service-03.jpg"

export default function StreamLiveStream() {
    return (
        <div className="start-live-stream">
            <ContainerTitle firstTitle="How To Start " secondTitle="Live Stream" />
            <div className="card-wrapper-live-stream">
                <div className="card-live-stream">
                    <img src={img1} alt="servies" />
                    <h1>Go To Your Profile</h1>
                    <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</p>
                </div>
                <div className="card-live-stream">
                    <img src={img2} alt="servies" />
                    <h1>Live Stream Button</h1>
                    <p>If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com</p>
                </div>
                <div className="card-live-stream">
                    <img src={img3} alt="servies" />
                    <h1>You Are Live</h1>
                    <p>You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.</p>
                </div>
            </div>
            <div className="btn-container">
                <Link to="/profile">
                    <Btn name="Go To Profile" />
                </Link>
            </div>
        </div>
    )
}
