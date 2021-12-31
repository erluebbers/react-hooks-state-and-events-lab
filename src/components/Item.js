import React, { useState } from "react";

function Item({ name, category }) {

  const [addItem, setAddItem] = useState(false)

  function addToCart() {
    setAddItem(!addItem)
  }

  return (
    <li className={addItem ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">{addItem ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
