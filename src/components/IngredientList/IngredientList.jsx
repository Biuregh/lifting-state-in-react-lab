import Ingredient from "../Ingredient/Ingredient.jsx";

const IngredientList = ({ ingredients, onAdd }) => {
  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ing, index) => (
          <Ingredient key={index} ingredient={ing} isAdd={true} onAdd={onAdd} />
        ))}
      </ul>
    </div>
  )
};

export default IngredientList;
