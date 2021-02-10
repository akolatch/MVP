import React, { useState, useContext } from 'react';
import { RecipeContext } from '../RecipeContext';
import OptionalField from './OptionalField';
import OptionalFieldHook from './OptionalFieldHook';
import NewVersionHook from './NewVersionHook';
import IngredientInputHook from './IngredientInputHook';
import IngredientInput from './IngredientInput';
import AddedIngredient from '../RecipeDisplayComponent/Ingredient';

const literalFields = [
  'servings',
  'time',
  'active_time',
  'difficulty',
  'source',
];

const RecipeForm = () => {
  const { newUserRecipe } = useContext(RecipeContext);
  const [newRecipe, setNewRecipe] = newUserRecipe;
  const [newVersion, inputField] = NewVersionHook(newRecipe.recipe_id);
  const [displayField, toggleOptionalField] = OptionalFieldHook();
  const [
    newIngredient,
    setNewIngredient,
    newInputIngredient,
  ] = IngredientInputHook();

  const setName = (e) => {
    setNewRecipe((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
    console.log(newRecipe);
  };

  const addIngredient = (field) => {
    const value = [...newVersion.ingredientList, newIngredient];
    inputField(field, value);
    setNewIngredient({
      amount: '',
      unit: '',
      ingredient: '',
    });
  };
  return (
    <div>
      <form action=''>
        <label htmlFor=''>Name</label>
        <input
          type='text'
          name='name'
          value={newRecipe.name}
          onChange={setName}
        />
        {literalFields.map((field, i) => (
          <OptionalField
            field={field}
            display={displayField[field]}
            toggleView={toggleOptionalField}
            version={newVersion}
            onChange={inputField}
            key={i}
          />
        ))}
        <label htmlFor=''>Ingredients</label>
        <br />
        {newVersion.ingredientList.map((ingredient) => (
          <AddedIngredient ingredient={ingredient} />
        ))}
        <IngredientInput
          ingredient={newIngredient}
          onChange={newInputIngredient}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            addIngredient('ingredientList');
          }}
        >
          Add Ingredients
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
