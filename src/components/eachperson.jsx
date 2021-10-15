import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Navbar from './navbar';
import Footer from './footer'
import './eachperson.css';

function EachPerson(props){
    return(
        <div>
            <Navbar />
           
            <br />
            <button onClick={() => props.ChangeShowUser(null)}>exit</button>
            {/* <br />
            name= {props.user.first_name} {props.user.last_name}
            <br />
            email= {props.user.email} 
            <br />
            <img src={props.userExtra.profile_photo} alt="profiel" style={{height:'50px'}} />
            <br />
            Bio= {props.userExtra.bio} 

            {console.log(props)} */}


{console.log(props)} 
<div class="user-profile">
	<img class="avatar" src={props.userExtra.profile_photo} alt="Ash" />
    <div class="username">{props.user.first_name} {props.user.last_name}</div>
    <div class="description">
    {props.user.email} 
  </div>
  <div class="bio">
  Batch of { 20 + props.userExtra.batch[3]+props.userExtra.batch[4]} 
  </div>
    
  <ul class="data">
    <li>BIO:</li>
 </ul>
</div>
 
            <Footer/>
        </div>
    );
}

export default EachPerson