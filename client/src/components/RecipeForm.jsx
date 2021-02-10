import React, { useState, useContext } from 'react';
import { RecipeContext } from './RecipeContext';
import OptionalField from './OptionalField';

const literalFields = [
  'servings',
  'time',
  'active_time',
  'difficulty',
  'source',
];

const RecipeForm = () => {
  const { list } = useContext(RecipeContext);
  const [recipeList] = list;
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
  const [newVersion, setNewVersion] = useState({
    recipe_id: newRecipe.recipe_id,
    ingredientList: [],
    tools: [],
    steps: [],
    user_id: 1,
  });
  const [displayField, setDisplayField] = useState({
    servings: false,
    source: false,
    difficulty: false,
    time: false,
    active_time: false,
  });

  const setName = (e) => {
    setNewRecipe((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
    console.log(newRecipe);
  };

  const setVersionField = (e) => {
    setNewVersion((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(newVersion);
  };

  const toggleOptionalField = (field, flip) => {
    setDisplayField((prevState) => ({
      ...prevState,
      [field]: flip,
    }));
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
            onChange={setVersionField}
            key={i}
          />
        ))}
        <label htmlFor=''>Ingredients</label>
      </form>
    </div>
  );
};

export default RecipeForm;
