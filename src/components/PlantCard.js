import {React, useState} from "react";

function PlantCard({plant}) {
  // console.log(plant)
  const [stockStatus, setStockStatus] = useState(true)

  function handleClick(){
    setStockStatus(!stockStatus)
  }

  // console.log(stockStatus)

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {stockStatus ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
