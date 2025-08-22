import React, { useState } from "react";
import ItemList from "../component/ItemList";
import AddItemForm from "../component/AddItemForm";

const initialItems = [
  { id: 1, title: "Lost Keys", description: "Near library", status: "Found" },
  { id: 2, title: "Black Wallet", description: "With student ID", status: "Lost" }
];

function Dashboard() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (newItem) => {
    const itemWithId = { ...newItem, id: Date.now() };
    setItems([...items, itemWithId]);
  };

  return (
    <div>
      <h1>Items Dashboard</h1>
      <AddItemForm onAddItem={handleAddItem} />
      <hr />
      <ItemList items={items} />
    </div>
  );
}

export default Dashboard;
