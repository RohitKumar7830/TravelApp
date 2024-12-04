import React from 'react';
import axios from 'axios';
import './bucketadd.css';

function BucketItem(props) {
        const deleteBucketHandler = (bucket_id) => {
            axios.delete(`http://localhost:8000/api/bucketlist/${encodeURIComponent(bucket_id)}`)
                 .then(res => console.log(res))
              
    }

        return (
            <div class="output">
                {/* <p class="form">{props.bucketlist.bucket_id}</p> */}
                <div class="data">
                <label>Name:</label>
                <p class="form">{props.bucketlist.name}</p>
                </div>
                <div class="data">  
                <label>Place Visited:</label>
                <p class="form">{props.bucketlist.destination}</p>
                </div>
                <div class="data">
                <label>Trip Duration:</label>
                <p class="form">{props.bucketlist.dates}</p>
                </div>
                <div class="data">
                <label>Trip Budget:</label>
                <p class="form">{props.bucketlist.budget}</p>
                </div>
                <div class="data">
                <label>Experience:</label>
                <p class="form">{props.bucketlist.experience}</p>
                </div>
                <div class="data">
                <label>suggestions:</label>
                <p class="form">{props.bucketlist.suggestions}</p>
                </div>
                <button onClick={() => deleteBucketHandler(props.bucketlist.bucket_id)}>Delete BucketList</button>
            </div>
        )
}

export default BucketItem;