import FeaturedGaming from "../../componenets/Container/FeaturedGaming/FeaturedGaming"
import "./Browse.css"
import StreamLiveStream from "../../componenets/Container/StreamLiveStream/StreamLiveStream"
import MostPopularLive from "../../componenets/Container/MostPopularLive/MostPopularLive"


const Browse = () => {

    return (
        <>
            <div>
                <FeaturedGaming />
                <StreamLiveStream />
                <MostPopularLive />
            </div>
        </>
    )
}

export default Browse;
