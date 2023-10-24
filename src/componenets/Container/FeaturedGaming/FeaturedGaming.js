import "./FeaturedGaming.css";
import React from "react";
import FeaturedCardGaming from "../FeaturedCardGaming/FeaturedCardGaming";
import FeaturedGamingData from "../../../Data/FeaturedGamingData";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// three is an error in the slider image 

// import Slider from "react-slick";
import ContainerTitle from "../../ContainerTitle/ContainerTitle";
import TopDownloaded from "../TopDownloaded/TopDownloaded";


const allCard = FeaturedGamingData.map((card) => (
    <FeaturedCardGaming
        key={card.id}
        name={card.name}
        rate={card.rate}
        download={card.download}
        image={card.image}
    />
));

const FeaturedGaming = () => {

    return (
        <>
                <ContainerTitle firstTitle="Featured" secondTitle="Games" />
                <div className="main-card-sllider-feartured-gaming">
                    <div className="all-Card-gaming-featured">
                        {allCard}
                    </div>
                    <div className="top-donwloads">
                        <TopDownloaded />
                    </div>
            </div>
        </>
    );
};

export default FeaturedGaming;
