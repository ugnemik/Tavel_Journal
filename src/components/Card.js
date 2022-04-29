import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img alt="Mountain" src={props.item.coverImg} />
      <div className="card-content">
        <div className="location">
          <p>
            <i class="fa-solid fa-location-dot"></i>
            {props.item.location}
          </p>
          <a href={props.item.googleMaps}>View on Google Maps</a>
        </div>
        <h2 className="title">{props.item.title}</h2>
        <p className="date">{props.item.date}</p>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}
