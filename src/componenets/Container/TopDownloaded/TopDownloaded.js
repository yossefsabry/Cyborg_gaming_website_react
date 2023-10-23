import ContainerTitle from "../../ContainerTitle/ContainerTitle";
import "./TopDownloaded.css";
import GamingCard from "../../GamingCard/GamingCard"
import GameDataDic from "../../../Data/GamingData";
const allGamingCard = GameDataDic.map((card) => {
    return <GamingCard key={card.id} image={card.image} data={card.name} hour={card.data} hours={card.HoursPlay} state={card.state} />
})

const TopDownloaded = () => {
    return (
        <div className="top-downlod">
            <ContainerTitle firstTitle="Top" secondTitle="Donwloads" />
            {allGamingCard}
        </div>
    )
}

export default TopDownloaded;
