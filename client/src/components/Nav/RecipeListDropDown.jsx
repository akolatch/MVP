import React, { useContext } from 'react';
import { RecipeContext } from '../RecipeContext.jsx';

const ListDropDown = () => {
  const { list, recipe, version, displayForm } = useContext(RecipeContext);
  const [recipeList] = list;
  const [, setDisplayRecipeForm] = displayForm;
  const [currentRecipe, setCurrentRecipe] = recipe;
  const [, setCurrentVersion] = version;

  const selectRecipe = (e) => {
    e.preventDefault();
    setCurrentVersion(0);
    setCurrentRecipe(recipeList[e.target.value]);
    setDisplayRecipeForm(false);
    console.log('here', currentRecipe);
  };

  return (
    <div>
      <select name='RecipeSelector' onChange={selectRecipe}>
        <option value={false}>Change Recipe</option>
        {recipeList.map((recipe, i) => (
          <option key={recipe._id} value={i}>
            {recipe.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListDropDown;
