import { useState } from "react";
import Item from './Item.js'
export default function List({items, onClearAll, onDeleteItem, onCheck}) {
    const [sortBy, setSortBy] = useState("input");
    let sortedItems;
    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed));
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onCheck={onCheck}/>)}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={e=> setSortBy(e.target.value)}>
            <option value='input'>Sort by input order</option>
            <option value='description'>Sort by description</option>
            <option value='packed'>Sort by packed status</option>
          </select>
          <button onClick={onClearAll}>Clear All</button>
        </div>
      </div>
    )
  }