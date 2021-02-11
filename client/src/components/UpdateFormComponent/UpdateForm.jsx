import React, { useState, useContext } from 'react';
import { RecipeContext } from '../RecipeContext.jsx';
import IngredientInput from '../RecipeFormComponent/IngredientInput.jsx';
import IngredientInputHook from '../RecipeFormComponent/IngredientInputHook.jsx';
import UpdateIngredient from './UpdateIngredient.jsx';
import useOptionalField from './UseOptionalField.jsx';

const UpdateForm = () => {
  const { list, recipe, version, newUserRecipe, recipeWasAdded } = useContext(
    RecipeContext
  );
  const [currentVersion, setCurrentVersion] = version;
  const [currentRecipe, setCurrentRecipe] = recipe;
  const [updateRecipe, setUpdateRecipe] = useState({
    ...currentRecipe.versions[currentVersion],
  });
  const [
    newIngredient,
    setNewIngredient,
    newInputIngredient,
  ] = IngredientInputHook();

  const [displayField, toggleField] = useOptionalField();

  const updateIngredient = (index, section, value) => {
    setUpdateRecipe((prevState) => {
      const newIngredientList = [...prevState.ingredientList];
      newIngredientList[index][section] = value;
      return {
        ...prevState,
        ingredientList: newIngredientList,
      };
    });
    console.log(updateRecipe);
  };

  const addIngredient = () => {
    setUpdateRecipe((prevState) => {
      const newIngredientList = [...prevState.ingredientList, newIngredient];
      return {
        ...prevState,
        ingredientList: newIngredientList,
      };
    });
    setNewIngredient({
      amount: '',
      unit: '',
      ingredient: '',
    });
  };

  return (
    <div>
      <form action=''>
        <label htmlFor=''>Ingredients</label>
        <br />
        {updateRecipe.ingredientList.map((ingredient, i) => (
          <UpdateIngredient
            ingredient={ingredient}
            key={`${i}ing`}
            onChange={updateIngredient}
            index={i}
          />
        ))}
        {displayField.ingredientList ? (
          <div>
            <IngredientInput
              ingredient={newIngredient}
              onChange={newInputIngredient}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                addIngredient();
              }}
            >
              More Ingredients
            </button>
          </div>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleField('ingredientList', true);
            }}
          >
            More Ingredients{' '}
          </button>
        )}
      </form>
      <pre>{JSON.stringify(updateRecipe, null, 2)}</pre>
    </div>
  );
};
export default UpdateForm;
