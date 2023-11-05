import "./DetailsSection.css"
import Wrapper from "../../Wrapper/Wrapper"

import img from "../../../images/details-01.jpg"
import img2 from "../../../images/details-02.jpg"
import img3 from "../../../images/details-03.jpg"
import { Btn2 } from "../../Btn/Btn"

const DetailsSection = () => {
    return (
        <div data-aos="fade-left">
            <h1 className="title-fortnite">FORTNITE DETAILS</h1>
            <Wrapper>
                <div className="wrapper-item-details">
                    <div className='item-details'>
                        <div><p>Fortnite</p> <span><i className="bx bxs-star"></i> 4.8</span></div>
                        <div><p>Sandbox</p> <span><i className='bx bxs-download'></i> 2.3M</span></div>
                    </div>
                    <div className='item-details'>
                        <div><p>PUBG</p> <span><i className="bx bxs-star"></i> 9.8</span></div>
                        <div><p>Tecent</p> <span><i className='bx bxs-download'></i>102.3M</span></div>
                    </div>
                </div>
                <div className="info-details">
                    <div className="details-img-container">
                        <img src={img} alt="image-fortnite" />
                        <img src={img2} alt="image-fortnite" />
                        <img src={img3} alt="image-fortnite" />
                    </div>
                    <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a small contribution via PayPal to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
                    <Btn2 name="Downlaod Fortnite Now" />
                </div>
            </Wrapper>
        </div>
    )
}

export default DetailsSection
