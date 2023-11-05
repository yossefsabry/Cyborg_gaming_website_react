import "./MostPopularLive.css"
import ContainerTitle from "../../ContainerTitle/ContainerTitle"
import Wrapper from "../../Wrapper/Wrapper";
import streamCardData from "../../../Data/StreamcCrdData"
import MostPopluarStreamCard from "../../MostPopluarStreamCard/MostPopluarStreamCard"
import Btn from "../../Btn/Btn"

const allCardStream = streamCardData.map((card) => (
    <MostPopluarStreamCard key={card.id} image={card.image} profile={card.image_profile} name={card.name} description={card.describe} />
))


const MostPopularLive = () => {
    return (
        <>
            <Wrapper >
                <div className="most-popular-live" data-aos="fade-down">
                    <ContainerTitle firstTitle="Most Popular" secondTitle="Live Stream" />
                    <div className="card-stream-wrapper">
                        {allCardStream}
                    </div>
                    <div className="btn-container">
                        <Btn name="Discover All Stream" />
                    </div>
                </div>
            </Wrapper >
        </>
    )
}

export default MostPopularLive;
