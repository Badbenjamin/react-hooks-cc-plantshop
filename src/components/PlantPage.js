import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useEffect, useState } from "react";

function PlantPage() {

  const [myPlants, setMyPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(plantData => setMyPlants(plantData))
  }, [])

  // console.log(myPlants)

  function addPlant(newPlant){
    // console.log(newPlant)
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(newPlant)
    })
    .then(response => response.json())
    .then(newPlantData => setMyPlants([...myPlants, newPlantData]))
  }
  
  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search />
      <PlantList myPlants={myPlants}/>
    </main>
  );
}

export default PlantPage;
