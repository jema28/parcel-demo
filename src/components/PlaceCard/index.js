import React from 'react';
import "./placecard.css"

const PlaceCard = ({roomType, title, price}) => (
  <div className="PlaceCardContainer">
    <h2>image placeholder</h2>
    <p>{roomType}</p>
    <p>{title}</p>
    <p>{price}</p>
  </div>
)

export default PlaceCard;
