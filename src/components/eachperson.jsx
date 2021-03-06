import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "./eachperson.css";

function EachPerson(props) {
  return (
    <div>
      <Navbar />
      <div class="user-profile">
      <button
        onClick={() => props.ChangeShowUser(null)}
        className="btn btn-secondary p-3 mb-5 "
        id="btn1"
      >
        <h4>
        <i class="fas fa-chevron-left"></i>
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
