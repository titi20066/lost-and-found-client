import React from "react";
import ItemCard from "./ItemCard";
import "../style/ItemList.css";

function ItemList({ items }) {
  if (!items || items.length === 0) {
    return <p>No items yet.</p>;
  }
  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ItemList;
