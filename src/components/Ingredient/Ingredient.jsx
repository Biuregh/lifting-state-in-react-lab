const Ingredient = ({ ingredient, isAdd, onAdd, onRemove, index }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      {isAdd ? (
        <button type="button" onClick={() => onAdd(ingredient)}>+</button>
      ) : (
        <button type="button" onClick={() => onRemove(index)}>x</button>
      )}
    </li>
  );
};

export default Ingredient;
