
const BurgerStack = ({ stack, onRemove }) => {
  return (
    <div>
      <h2>Your Burger</h2>
      <ul>
        {stack.length ? (
          stack.map((ing, index) => (
            <li key={index} style={{ backgroundColor: ing.color}}>
              {ing.name}
              <button type="button" onClick={() => onRemove(index)}>x</button>
            </li>
          ))
        ) : <li>No ingredients yet!</li>}
      </ul>
    </div>
  )
};

export default BurgerStack;
