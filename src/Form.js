import { useState } from "react";
import { uniqueId } from "lodash";

export default function Form({onAddItems}) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    function handleSubmit(e) {
      e.preventDefault();
      if (!description) return;
      const newItem =  {id: uniqueId(), description, quantity, packed: false};
      onAddItems(newItem);
      setDescription('');
      setQuantity(1);
    }
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you want for your trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>{Array.from({ length: 20 }, (_, i) => i + 1)
            .map((num) => <option key={num} value={num}>{num}</option>)  
          }
        </select>
        <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)} />
        <button>ADD</button>
      </form>
    )
  }