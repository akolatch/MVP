import React, { useContext } from 'react';
import { RecipeContext } from './RecipeContext.jsx';
import Recipe from './RecipeListItem.jsx';

const RecipeList = () => {
  const { list } = useContext(RecipeContext);
  const [recipeList] = list;
  return (
    <ul>
      {recipeList.map((recipe, i) => (
        <Recipe
          key={recipe._id}
          name={recipe.name}
          versions={recipe.versions.map((v) => v.version)}
          index={i}
        />
      ))}
    </ul>
  );
};

export default RecipeList;
