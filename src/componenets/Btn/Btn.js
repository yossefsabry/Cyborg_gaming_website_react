import './Btn.css'
const Btn = (props) => {
    return (
        <div>
            <button>{props.name}</button>
        </div>
    )
}
const Btn2 = (props) => {
    return (
        <div>
            <button className='btn2'>{props.name}</button>
        </div>
    )
}

export default Btn;
export {Btn2};