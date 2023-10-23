import Btn from "../../Btn/Btn"
import "./TopStraemsCard.css"

const TopStraemsCard = (props) => {
    return (
        <div className="item-streams">
            <div><span>0{props.index}</span> <img src={props.image} alt="steamers" /></div>
            <div><i className='bx bxs-check-circle' ></i> <span>{props.name}</span></div>
            <Btn name="follow" />
        </div>
    )
}

export default TopStraemsCard
