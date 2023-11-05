import "./MostPopular.css";
import Btn from "../../../componenets/Btn/Btn";
import ContainerTitle from "../../ContainerTitle/ContainerTitle";
import DataCardAll from "../../../Data/CardData";
import Card from "../../Card/Card";
import Wrapper from "../../Wrapper/Wrapper";
import { Link } from "react-router-dom";
const AllCard = DataCardAll.map((card) => {
    return <Card key={card.id} img={card.image} name={card.name} rate={card.rate} category={card.type} download={card.downlaod} />
})

const MostPopular = () => {
    return (
        <Wrapper >
            <div className="most-popular" id="most-popular" data-aos = "fade-left">
                <ContainerTitle firstTitle="Most Popular" secondTitle="Right Now" />
                <div className="card-container">
                    {AllCard}
                </div>
                <div className="btn-container">
                    <Link to="profile">
                        <Btn name="Discover Popular" />
                    </Link>
                </div>
            </div>
        </Wrapper>
    );
};

export default MostPopular;
