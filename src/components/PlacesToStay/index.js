import React from 'react';
import "./placestostay.css"

import PlaceCard from "../PlaceCard"

const PlacesToStay = () => (
  <section className="PlacesToStayContainer">
    <h2>Homes</h2>
    <PlaceCard roomType="Entire Apartment" title="Quiet apartment" price="$80 per night" />
    <PlaceCard roomType="Entire Apartment" title="Quiet apartment" price="$80 per night" />
  </section>
)

export default PlacesToStay;
