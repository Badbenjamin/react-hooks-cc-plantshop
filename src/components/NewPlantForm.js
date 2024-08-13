import React from "react";
import { useState } from "react";

function NewPlantForm({onAddPlant}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleOnChange(e){
    // console.log(e.target.value)
    // console.log(e.target.name)
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  // console.log(formData)

  function handleSubmit(e){
    e.preventDefault()
    // console.log("submit")
    const newPlant = {
      ...formData,
      // price: (Number(formData.price))
    }
    onAddPlant(newPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleOnChange} type="text" name="name" placeholder="Plant name" value={formData.name} />
        <input onChange={handleOnChange} type="text" name="image" placeholder="Image URL" value={formData.image}/>
        <input onChange={handleOnChange} type="number" name="price" step="0.01" placeholder="Price" value={formData.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
