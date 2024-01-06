import { useState } from "react";
import Logo from './Logo.js';
import Form from './Form.js';
import List from './List.js';
import Stats from './Stats.js';

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }
  function handleDeleteItem(item) {
    setItems((items) => items.filter((el) => el.id !== item.id))
  }
  function handleCheck(item) {
    setItems((items) => items.map((el) => el.id === item.id ? {...el, packed: !el.packed} : el))
  }
  function handleClearAll() {
    const confirmed = window.confirm("Are you sure you want to delete all items?");
    if (confirmed) setItems(() => []);
  }
  return (
  <div className="app">
    <Logo />
    <Form onAddItems={handleAddItems}/>
    <List items={items} onDeleteItem={handleDeleteItem} onClearAll={handleClearAll} onCheck={handleCheck}/>
    <Stats items={items}/>
  </div>
  )
}
