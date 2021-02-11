import React, { useState } from 'react';

const useOptionalField = (initialState) => {
  const [displayField, setDisplayField] = useState(initialState);

  const toggleField = (field, flip) => {
    setDisplayField((prevState) => ({
      ...prevState,
      [field]: flip,
    }));
  };

  return [displayField, toggleField];
};

export default useOptionalField;
