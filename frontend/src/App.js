import logo from './logo.svg';
import './App.css';
import Experience from './components/Experience'
import Bucketlist from './components/bucketlist';
import Popular from './components/popular';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  return (
       <div class="main_container">
       <div class="hero">
       <div class="header">
        <div class="left">
          <p>Sanchari</p>
        </div>
        <div class="right">
        <p><a href="#Experience">Experiences</a></p>
        <p><a href="#Popular">PopularPlaces</a></p>
        <p><a href="#Bucketlist">BucketList</a></p>
        </div>
      </div>
      <div class="floatingimage">
                    <div class="overlay">
                    <p>Sanchari</p>
                    <h1 class="small">A Travel App</h1>
                </div>
        </div>
       </div>
        <Experience />
        <Bucketlist />
        <Popular />
     </div>
  );
}

export default App;
