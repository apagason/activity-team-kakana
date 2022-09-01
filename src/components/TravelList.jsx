import React, { useState } from "react";
odo;
import TravelHeader from "./TravelHeader";
import TravelBody from "./TravelBody";

export default function TravelList() {
  const [Travels, setTravels] = useState([]);

  const addTravel = (newTravel) => {
    if (!newTravel.text) {
      return;
    }
    const newTravels = [newTravel, ...Travels];
    setTravels(newTravels);
  };

  const removeTravel = (id) => {
    const newTravels = [...Travels].filter((Travel) => Travel.id !== id);
    setTravels(newTravels);
  };

  const updateTravel = (TravelId, newValue) => {
    if (!newValue) {
      return;
    }
    const newTravels = Travels.map((item) =>
      item.id === TravelId ? newValue : item
    );
    setTravels(newTravels);
  };

  return (
    <header>
      <h1>Tast List 2022</h1>
      <TravelHeader onSubmit={addTravel} />
      <br />
      <hr />
      <br />
      <br />
      <TravelBody
        Travels={Travels}
        removeTravel={removeTravel}
        updateTravel={updateTravel}
      />
    </header>
  );
}
