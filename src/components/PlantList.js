import React from "react";
import PlantCard from "./PlantCard";

function PlantList({myPlants}) {
  // console.log(myPlants)

  const plantListElement = myPlants.map((plant) => {
    return (
      <PlantCard key={plant.id} plant={plant} /> 
    )
  })

  return (
    <ul className="cards">{plantListElement}</ul>
  );
}

export default PlantList;
