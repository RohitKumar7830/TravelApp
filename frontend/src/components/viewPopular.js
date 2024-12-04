import PopularItem from "./popularadd";

function PopularView(props) {
    return (
        <div>
            <ul>
            {props.popularlist.map(popular_destination => <PopularItem popular_destination={popular_destination} />)}
            </ul>
        </div>
    )
}

export default PopularView;