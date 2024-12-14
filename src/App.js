import './App.css';
import Login from './Login.js';
import React, {useEffect} from "react";
import { getTokenFromUrl } from './spotify.js';

//ae22bd10c36a4a14b7022bc6111fd293 spotify id
function App() {
  //run code based on token

  useEffect(()=>{
     const token = getTokenFromUrl();
     console.log("The Token is",token);
     
  },[]);
  
  return (
    <div className="App">

    <Login/>

    </div>
  );
}

export default App;
