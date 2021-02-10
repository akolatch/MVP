import React, { useState } from 'react';

const NewVersionHook = (recipe_id, user_id) => {
  const [newVersion, setNewVersion] = useState({
    recipe_id: recipe_id,
    ingredientList: [],
    tools: [],
    steps: [],
    user_id: 1,
  });

  const inputField = (field, value) => {
    setNewVersion((prevState) => ({
      ...prevState,
      [field]: value,
    }));
    console.log(newVersion);
  };

  return [newVersion, inputField];
};

export default NewVersionHook;
