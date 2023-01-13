import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
let isOn =true
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = false ? "App dark" : "App light"

  function handleShoppingListClick(event) {
    console.log(event.target)

  }
  function handleClick(event) {
    isOn = ! isOn 
    event.target(isOn)
    console.log(event.target)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
