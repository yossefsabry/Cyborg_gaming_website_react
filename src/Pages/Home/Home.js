import "./Home.css"
import Hero from "../../componenets/Container/Hero/Hero"
import MostPopular from "../../componenets/Container/MostPopular/MostPopular"
import GamingLibrary from "../../componenets/Container/GamingLibrary/GamingLibrary"

const Home = () => {
    return (
        <div>
            <Hero />
            <MostPopular />
            <GamingLibrary />
        </div>
    )
}

export default Home;
