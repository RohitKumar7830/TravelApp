import React from 'react';
import axios from 'axios';
import './traveladd.css';

function TravelItem(props) {
    const deleteTravelHandler = (travel_id) => {
        axios.delete(`http://localhost:8000/api/travel${encodeURIComponent(travel_id)}`)
        .then(res =>console.log(res))
        .catch(error => console.error('Error deleting todo:', error));
    }

        return (
            <div class="output">
                {/* <p class="form">{props.travel.travel_id}</p> */}
                <div class="data">
                <label>Name:</label>
                <p class="form">{props.travel.name}</p>
                </div>
                <div class="data">
                <label>Place Visited:</label>
                <p class="form">{props.travel.place_visited}</p>
                </div>
                <div class="data">
                <label>Trip Duration:</label>
                <p class="form">{props.travel.dates}</p>
                </div>
                <div class="data">
                <label>Trip Budget:</label>
                <p class="form">{props.travel.budget}</p>
                </div>
                <div class="data">
                <label>Experience:</label>
                <p class="form">{props.travel.experience}</p>
                </div>
                <div class="data">
                <label>suggestions:</label>
                <p class="form">{props.travel.suggestions}</p>
                </div>
                <button onClick={() => deleteTravelHandler(props.travel.travel_id)}>Delete Experience</button>
            </div>
        )
}

export default TravelItem;