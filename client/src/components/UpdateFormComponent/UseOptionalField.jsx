import React, { useState } from 'react';

const useOptionalField = () => {
  const [displayField, setDisplayField] = useState({
    ingredientList: false,
    steps: false,
    servings: false,
    source: false,
    difficulty: false,
    time: false,
    active_time: false,
    tools: false,
  });

  const toggleField = (field, flip) => {
    setDisplayField((prevState) => ({
      ...prevState,
      [field]: flip,
    }));
  };

  return [displayField, toggleField];
};

export default useOptionalField;
