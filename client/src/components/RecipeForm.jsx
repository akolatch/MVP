import React, { useState, useContext } from 'react';
import { RecipeContext } from './RecipeContext';
const RecipeForm = () => {
  const { list } = useContext(RecipeContext);
  const [recipeList, setRecipeList] = list;
  const [newVersion, setNewVersion] = useState({
    ingredientList: [],
    tools: [],
    steps: [],
  });

  const [newRecipe, setNewRecipe] = useState({
    name: '',
    user_id: 1,
    recipe_id: (() => {
      const sorted = recipeList
        .slice()
        .sort((a, b) => b.recipe_id - a.recipe_id);
      return sorted[0].recipe_id + 1;
    })(),
  });

  return (
    <div>
      <form action=''>
        <input
          type='text'
          name='name'
          value={newRecipe.name}
          onChange={onChange}
        />
        <input
          type='text'
          name='name'
          value={newRecipe.name}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default RecipeForm;
