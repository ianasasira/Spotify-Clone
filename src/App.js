import './App.css';
import Login from './Login.js';
import React, {useEffect, useState} from "react";
import { getTokenFromUrl } from './spotify.js';

//ae22bd10c36a4a14b7022bc6111fd293 spotify id
function App() {

  // state hooks for variables
  //temporary location for the token when it refereshs it becomes null
  const[token, setToken]= useState(null);


  //run code based on token

  //the convention is we use _ for the one we are to use
  useEffect(()=>{
     const hash = getTokenFromUrl();
     window.location.hash="";
     const _token = hash.access_token;

     if(_token){
      //hence the state variable token becomes _token
      setToken(_token)
     }
  },[]);
  
  return (
    <div className="App">
    {
      //jsx
      token ? (
        <h1>MUSIC PAGE</h1>
      ):(
        <Login/>
      )
    }
    

    </div>
  );
}

export default App;
