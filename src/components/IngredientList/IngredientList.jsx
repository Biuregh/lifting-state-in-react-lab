const IngredientList = ({ ingredients, onAdd }) => {
  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ing, index) => (
          <li key={index} style={{ backgroundColor: ing.color }}>
            {ing.name}
            <button type="button" onClick={() => {
              console.log('Clicked + on:', ing.name);
              onAdd(ing)
            }}>+</button>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default IngredientList;
