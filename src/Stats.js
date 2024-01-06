
export default function Stats({items}) {
    if (!items.length) {
      return (
        <footer className="stats">
          <em>Start adding some items to your packing list!</em>
        </footer>
      )
    }
    const packedCount = items.filter((item) => item.packed).length;
    const itemsCount = items.length;
    const percentage = Math.round((packedCount / itemsCount) * 100) || 0;
    return (
      <footer className="stats">
        <em>
          {percentage === 100 ? "You've packed all your items! You are ready for a trip!" :
            `You have ${itemsCount} items on your list, and you already packed ${packedCount} (${percentage}%)`
            }
        </em>
      </footer>
    )
  }