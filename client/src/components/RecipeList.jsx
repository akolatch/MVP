import React, { useContext } from 'react';
import { RecipeListContext } from '../context/RecipeListContext.jsx';

const RecipeList = () => {
  const [recipeList, setRecipeList] = useContext(RecipeListContext);
  console.log(recipeList);
  return (
    <ul>
      {recipeList.map((recipe, i) => (
        <li key={recipe._id}>{recipe.name}</li>
      ))}
    </ul>
  );
};

export default RecipeList;
