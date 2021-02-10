import React, { useState, createContext, useEffect, useRef } from 'react';
import axios from 'axios';

const useDidUpdate = (callback, deps) => {
  const hasMount = useRef(false);

  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  }, deps);
};

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
    axios.get('/1/list').then(({ data }) => {
      setRecipeList(data);
    });
  }, []);

  const recipeWasAdded = () => {
    const recipe = recipeList.filter(
      (recipe) => (recipe.recipe_id = newRecipe.recipe_id)
    );
    console.log(recipe);
    setCurrentVersion(0);
    setDisplayRecipeForm(false);
    setCurrentRecipe(null);
    setNewRecipe({
      name: '',
      user_id: 1,
      recipe_id: 0,
    });
  };

  return (
    <RecipeContext.Provider
      value={{
        list: [recipeList, setRecipeList],
        recipe: [currentRecipe, setCurrentRecipe],
        version: [currentVersion, setCurrentVersion],
        displayForm: [displayRecipeForm, setDisplayRecipeForm],
        newUserRecipe: [newRecipe, setNewRecipe],
        recipeWasAdded,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
