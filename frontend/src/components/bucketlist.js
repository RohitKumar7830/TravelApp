import "./Bucketlist.css";
import BucketView from "./viewBucket";
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Bucketlist = () => {
    
    const [bucketList, setBucket] = useState([{}])
    const [bucket_id, setBucketid] = useState('')
    const [name, setName] = useState('')
    const [destination, setDestination] = useState('')
    const [dates, setDates] = useState('')
    const [budget, setBudget] = useState('')
    const [experience, setExperience] = useState('')
    const [suggestions, setSuggestions] = useState('')
    
     //Read all Bucketlist data
     useEffect(() => {
        axios.get('http://localhost:8000/api/bucketlist')
        .then(res => {
          setBucket(res.data)
        })
      });
  
         //Post BucketList Data
  const addBucketHandler = () => {
    axios.post('http://localhost:8000/api/bucketlist/', { 'bucket_id':bucket_id,'name':name,'destination':destination,'dates':dates,'budget':budget,'experience':experience,'suggestions':suggestions})
    .then(res => console.log(res))
  }

    
    
    
    return(
   <section id="Bucketlist">
    <div class="bby1">
    <div class="popup">
            <div class="form">
                <h2>Travel BucketList</h2>
                <div class="form-element">
                    <label for="bucket_id">BucketList ID</label>
                    <input type="text" id="bucket_id" placeholder="Enter BucketList ID" onChange={event=>setBucketid(event.target.value)} required />
                </div>
                <div class="form-element">
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Enter Your Name" onChange={event=>setName(event.target.value)} required />
                </div>
                <div class="form-element">
                    <label for="destination">Destination</label>
                    <input type="text" id="place_visisted" placeholder="Enter the Destination" onChange={event=>setDestination(event.target.value)} required />
                </div>
                <div class="form-element">
                    <label for="dates">Duration</label>
                    <input type="text"   placeholder="Enter The Trip Duration"  onChange={event=>setDates(event.target.value)} required />
                </div>
                <div class="form-element">
                    <label for="budget">Budget</label>
                    <input type="text" id="budget" placeholder="Enter Your Trip Budget" onChange={event=>setBudget(event.target.value)} required />
                </div>
                <div class="form-element">
                    <label for="experience">Planning</label>
                    <input type="text"  placeholder="Enter Your Trip Planning" onChange={event=>setExperience(event.target.value)} required />
                </div>
                <div class="form-element">
                    <label for="suggestions">Suggestions</label>
                    <input type="text" id="suggestions" placeholder="Enter Your Suggestions for the Planned Trip" onChange={event=>setSuggestions(event.target.value)} required />
                </div>
                <div class="form-element">
                   <button onClick={addBucketHandler}>Submit</button>
                </div>
            </div>
    </div>
    <div class="popup2">
            <div class="form">
                <h2>Travel BucketList</h2>
                <div class="form-element">
                    <BucketView bucketList={bucketList}/>
                </div>
            </div>
    </div>
    </div>
   </section>
);
}
export default Bucketlist;