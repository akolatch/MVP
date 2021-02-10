import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  const [recipeList, setRecipeList] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [currentVersion, setCurrentVersion] = useState(0);
  const [displayRecipeForm, setDisplayRecipeForm] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    user_id: 1,
  });

  if (recipeList.length > 0) {
    newRecipe.recipe_id = (() => {
      const sorted = recipeList
        .slice()
        .sort((a, b) => b.recipe_id - a.recipe_id);
      return sorted[0].recipe_id + 1;
    })();
  }

  useEffect(() => {
    axios.get('/1/list', { params: { noSort: true } }).then(({ data }) => {
      setRecipeList(data);
    });
  }, []);

  return (
    <RecipeContext.Provider
      value={{
        list: [recipeList, setRecipeList],
        recipe: [currentRecipe, setCurrentRecipe],
        version: [currentVersion, setCurrentVersion],
        displayForm: [displayRecipeForm, setDisplayRecipeForm],
        newUserRecipe: [newRecipe, setNewRecipe],
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
