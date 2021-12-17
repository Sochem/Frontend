import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Navbar from "./navbar";
import Footer from "./footer";
import "./eachperson.css";
import "./people-block.css";
var FontAwesome = require("react-fontawesome");

function EachPerson(props) {
  return (
    <div>
      <Navbar />
   

      {console.log(props)}
      <div class="user-profile">
      <button
        onClick={() => props.ChangeShowUser(null)}
        className="btn btn-secondary p-3 mb-5 "
        id="btn1"
      >
        <h4>
          <FontAwesome name="chevron-left" />
        </h4>
      </button>
        <img class="avatar" src={props.userExtra.profile_photo} alt="Ash" />
        <div class="username">
          {props.user.first_name} {props.user.last_name}
        </div>
        <div class="description">{props.user.email}</div>
        <div class="bio">
          Batch of 20
          {parseInt(props.userExtra.batch[3] + props.userExtra.batch[4]) + 4}
        </div>

        <ul class="data">
          <li>BIO: &nbsp; {props.userExtra.bio}</li>
        </ul>
      </div>

      <Footer className="footer-each"/>
    </div>
  );
}

export default EachPerson;
