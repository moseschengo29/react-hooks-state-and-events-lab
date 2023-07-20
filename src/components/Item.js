import React, { useState } from "react";

function Item({ name, category }) {
  const [addedToCart, setAddedToCart] = useState(false);

  function handleAddToCart() {
    setAddedToCart((add) => !add);
  }
  // { textDecoration: { "line-through" : ''} }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        onClick={handleAddToCart}
        className={addedToCart ? "in-cart remove" : "add"}
      >
        {addedToCart ? "Remove From Cart" : "Add To Cart"}
      </button>
    </li>
  );
}

export default Item;
