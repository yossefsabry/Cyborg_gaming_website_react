import "./GamingLibrary.css"
import Wrapper from "../../Wrapper/Wrapper"
import ContainerTitle from "../../ContainerTitle/ContainerTitle"
import GameDataDic from "../../../Data/GamingData"
import GamingCard from "../../GamingCard/GamingCard";
import Btn from "../../Btn/Btn";
import { Link } from "react-router-dom";

const allGamingCard = GameDataDic.map((card) => {
    return <GamingCard key={card.id} image={card.image} data={card.name} hour={card.data} hours={card.HoursPlay} state={card.state} />
})

const GamingLibrary = () => {
    return (
        <Wrapper >
            <div className="gaming-library">
                <ContainerTitle firstTitle="Your Gaming" secondTitle="Library" />
                <div className="game-wrapper">
                    {allGamingCard}
                </div>
                <div className="btn-container">
                    <Link to="profile">
                        <Btn name="View Your Library" />
                    </Link>
                </div>
            </div>
        </Wrapper>
    )
}

export default GamingLibrary;
