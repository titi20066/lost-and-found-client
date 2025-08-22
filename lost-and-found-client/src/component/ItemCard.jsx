import React from "react";
import "../style/ItemCard.css";

function ItemCard({ title, description, status }) {
  return (
    <div className={`item-card ${status.toLowerCase()}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <small>Status: {status}</small>
    </div>
  );
}

export default ItemCard;
