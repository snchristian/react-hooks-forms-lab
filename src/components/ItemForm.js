import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  
  const[formData, formDataSetter]=useState({
    name:"",
    category:"Produce"
  })

  function manageFormData(event){
    let name = event.target.name;
    let targetVlaue = event.target.value;
    formDataSetter({
      ...formData,[name]:targetVlaue
    })
  }

  function handlesubmit(event){
    event.preventDefault();
    const newitem={
      id:uuid(),
      name:formData.name,
      category:formData.category
    }

    onItemFormSubmit(newitem)
    
  }
  
  return (
    <form className="NewItem" onSubmit={handlesubmit}>
      <label>
        Name:
        <input type="text" name="name"  onChange={manageFormData} value = {formData.name} />
      </label>

      <label>
        Category:
        <select name="category"onChange={manageFormData} value={formData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
