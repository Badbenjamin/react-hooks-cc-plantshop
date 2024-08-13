import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useEffect, useState } from "react";

function PlantPage() {

  const [myPlants, setMyPlants] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(plantData => setMyPlants(plantData))
  }, [])

  console.log(myPlants)

  const filteredPlants = myPlants.filter(plants => {
    return plants.name.toUpperCase().includes(searchText.toUpperCase())
  })

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
      <Search setSearchText={setSearchText} />
      <PlantList myPlants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
