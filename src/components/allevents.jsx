import React, { useState, useEffect } from "react";
import "./allevents.css";

var FontAwesome = require("react-fontawesome");

function Allevents(props) {
  return (
    <div >
      <div className="mainbox" >
        {props.eventlist.map((evt, index) => {
          return (
            <a href={`events/${evt.title.toLowerCase()}`}>
              {/* <span>
                                    <span>
                                        <img src={evt.cover1} class="img-fluid"></img>
                                    </span>
                                    <div>
                                        <div className="event-title-all">{evt.title}</div>
                                        <div className="event-info-all"><FontAwesome name="map-marker"/> {evt.venue}</div>
                                        <div className="event-info-all"><FontAwesome name="calendar"/> {evt.date}</div>
                                    </div>
                                </span> */}

              <div className="card">
                <div className="image">
                  <img src={evt.cover1} class="img-fluid" style={{height:"250px", width:"300px"}}></img>
                </div>
                <div className="content">
                  <div className="event-title-all">{evt.title}</div>
                  <div className="event-info-all">
                    <FontAwesome name="map-marker" /> {evt.venue}
                  </div>
                  <div className="event-info-all">
                    <FontAwesome name="calendar" /> {evt.date}
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Allevents;
