import "./ContainerTitle.css"

const ContainerTitle = (props) => {
    return (
        <h2 className="container-title">
            <em>{props.firstTitle}</em> {props.secondTitle}
        </h2>
    )
}

export default ContainerTitle
