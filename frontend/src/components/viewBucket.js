import BucketItem from "./bucketadd";

function BucketView(props) {
    return (
        <div>
            <ul>
            {props.bucketList.map(bucketlist => <BucketItem bucketlist={bucketlist} />)}
            </ul>
        </div>
    )
}

export default BucketView;