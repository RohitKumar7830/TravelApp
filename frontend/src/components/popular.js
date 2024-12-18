import './Popular.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PopularView from './viewPopular';
import Popup from 'reactjs-popup';

const Popular = () => {

const [popularlist, setPopular] = useState([{}])
const [place_id, setPlaceid] = useState('')
const [place, setPlace] = useState('')
const [description, setDescription] = useState('') 


 useEffect(() => {
  axios.get('http://localhost:8000/api/popular_destination')
  .then(res => {
    setPopular(res.data)
  })
 });


 const addPopularHandler = () => {
  axios.post('http://localhost:8000/api/popular_destination',{'place_id':place_id,'place':place,'description':description})
  .then(res => console.log(res))
 }




  return (
    <section id="Popular">
      <div className="bby3">
        <div className="popup">
          <div className="form">
            <h2>Travel Recommendations</h2>
            <div className="form-element">
              <label htmlFor="place_id">Place ID</label>
              <input type="text" id="place_id" placeholder="Enter Place ID" onChange={event=>setPlaceid(event.target.value)} required />
            </div>
            <div className="form-element">
              <label htmlFor="place">Destination</label>
              <input type="text" id="place" placeholder="Enter The Place That You Wish To Recommend" onChange={event=>setPlace(event.target.value)} required />
            </div>
            <div className="form-element">
              <label htmlFor="description">Description</label>
              <input type="text" id="description" placeholder="Enter The  Description" onChange={event=>setDescription(event.target.value)} required />
            </div>
            <div className="form-element">
              <button  onClick={addPopularHandler}>Submit</button>
            </div>
            <div className="form-element">
            <Popup trigger=
                {<a>Update Recommendation?</a>}
                position="right center">
                 <div className="popup">
          <div className="form">
            <h2> Update Recommendations</h2>
            <div className="form-element">
                 <label htmlFor="place_id">Place ID</label>
                 <input type="text" id="place_id" placeholder="Enter Place ID"  onChange={event => setPlaceid(event.target.value)} required />
          </div>
          <div className="form-element">
                <label htmlFor="place">Destination</label>
                <input type="text" id="place" placeholder="Enter The Place That You Wish To Recommend"  onChange={event => setPlace(event.target.value)} required />
          </div>
          <div className="form-element">
               <label htmlFor="description">Description</label>
              <input type="text" id="description" placeholder="Enter The Description"  onChange={event => setDescription(event.target.value)} required />
           </div>

            <div className="form-element">
              <button>Submit</button>
            </div>
          </div>
        </div>
            </Popup>
            </div>
          </div>
        </div>
        <div className="popup2">
          <div className="form">
            <h2>Travel Recommendation</h2>
            <div className="form-element">
               <PopularView popularlist={popularlist} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Popular;
