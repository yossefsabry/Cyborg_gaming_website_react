import "./Wrapper.css";
const Wrapper = (props) => {
    return (
        <div className="wrapper-container" data-aos="zoom-in">
            {props.children}
        </div>
    )
}

export default Wrapper;
