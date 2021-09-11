import React from "react";
import { Link } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import "./item-home.scss";

const ItemHome = ({ item, handleWaypoint, reviel, index }) => (
  <Link to={`/portfolio/${item.slug}`}>
    <div className="section slider-container">
      <Waypoint
        onEnter={() => handleWaypoint(index, "enter")}
        onLeave={() => handleWaypoint(index, "leave")}
      />
      <div
        className={`slide ${reviel[index].revield ? "revield" : ""}`}
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      >
        <h1 className="title">{item.title}</h1>
        <h1 className="title-border">{item.title}</h1>
        <div className="container-subtitile">
          <div className="redline" />
          <div className="subtitle">{item.subtitle}</div>
        </div>
      </div>
    </div>
  </Link>
);

export default ItemHome;
