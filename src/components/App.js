import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [mode, setMode] = useState(false)

  const handleClick = () => {

    setMode((mode) => !mode);

  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = mode ? "App dark" : "App light"
  const newMode = mode ? "Light Mode" : "Dark Mode"

 console.log(appClass)
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{newMode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
