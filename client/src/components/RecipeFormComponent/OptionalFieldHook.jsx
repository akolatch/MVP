import React, { useState } from 'react';

const OptionalFieldHook = () => {
  const [displayField, setDisplayField] = useState({
    servings: false,
    source: false,
    difficulty: false,
    time: false,
    active_time: false,
  });

  const toggleField = (field, flip) => {
    setDisplayField((prevState) => ({
      ...prevState,
      [field]: flip,
    }));
  };

  return [displayField, toggleField];
};

export default OptionalFieldHook;
