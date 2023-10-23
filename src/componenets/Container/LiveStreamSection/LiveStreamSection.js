import "./LiveStreamSection.css"
import ContainerTitle from "../../ContainerTitle/ContainerTitle"
import streamerData from "../../../Data/streamersData"
import TopStraemsCard from "../TopStraemsCard/TopStraemsCard"
import FeaturedCardGaming from "../FeaturedCardGaming/FeaturedCardGaming"
import FeaturedGamingData from "../../../Data/FeaturedGamingData"
const LiveStreamSection = () => {

    const allCard = FeaturedGamingData.map((card) => (
        <FeaturedCardGaming
            key={card.id}
            name={card.name}
            rate={card.rate}
            download={card.download}
            image={card.image}
        />
    ));
    const topStreamsAll = streamerData.map((card, index) => (
        <TopStraemsCard
            key={card.id}
            index={index + 1}
            name={card.name}
            image={card.img}
            profile={card.profile}
            describe={card.describe}
        />
    ));

    return (
        <>
            <ContainerTitle firstTitle="Live" secondTitle="Streams" />
            <div className="main-card-sllider-feartured-gaming">
                <div className="all-Card-gaming-featured">
                    {allCard}
                </div>
                <div className="top-donwloads">
                    <ContainerTitle firstTitle="Top" secondTitle="Streams" />
                    {topStreamsAll}
                </div>
            </div>
        </>
    )
}

export default LiveStreamSection
