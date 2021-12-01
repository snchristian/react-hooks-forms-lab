import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const[searchInput,setSearchInput]=useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event){
      setSearchInput(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter(item =>{
    if(searchInput === ""){
      return true
    }
    else {
      const itemName = item.name.toLowerCase()
      return itemName.includes(searchInput.toLowerCase())
    }
  })

  return (
    <div className="ShoppingList">
    <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} search={searchInput} selectedCategory={selectedCategory}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
