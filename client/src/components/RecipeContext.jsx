import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  const [recipeList, setRecipeList] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [currentVersion, setCurrentVersion] = useState(0);
  const [displayRecipeForm, setDisplayRecipeForm] = useState(false);

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
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
