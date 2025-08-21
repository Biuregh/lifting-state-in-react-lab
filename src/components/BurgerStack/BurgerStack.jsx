import Ingredient from "../Ingredient/Ingredient.jsx";

const BurgerStack = ({ stack, onRemove }) => {
  return (
    <div>
      <h2>Your Burger</h2>
      <ul>
        {stack.length ? (
          stack.map((ing, index) => (
            <Ingredient key={index} ingredient={ing} isAdd={false} index={index} onRemove={onRemove}/>
          ))
        ) : <li>No ingredients yet!</li>}
      </ul>
    </div>
  )
};

export default BurgerStack;
