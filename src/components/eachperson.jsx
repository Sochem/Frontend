import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Navbar from './navbar';


function EachPerson(props){
    return(
        <div>
            <Navbar />
            <br />
            <button onClick={() => props.ChangeShowUser(null)}>exit</button>
            <br />
            name= {props.user.first_name} {props.user.last_name}
            <br />
            email= {props.user.email} 
            <br />
            <img src={props.userExtra.profile_photo} alt="profiel" style={{height:'50px'}} />
            <br />
            Bio= {props.userExtra.bio} 

            {console.log(props)}
        </div>
    );
}

export default EachPerson