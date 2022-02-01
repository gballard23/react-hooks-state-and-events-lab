import React, { useState } from "react";

function Item({ name, category }) {

  const [cart, inCart] = useState(false);

  const handleClick = () => {
    
    inCart((cart) => !cart);

  }

  const newClassName = cart ? "in-cart" : "";
  const isAdded = cart ? "Remove from cart" : "Add to Cart"


  return (
    <li className={newClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isAdded}</button>
    </li>
  );
}

export default Item;
