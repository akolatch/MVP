import React, { useState } from 'react';

const NewVersionHook = (initialVersionState) => {
  const [newVersion, setNewVersion] = useState(initialVersionState);

  const inputField = (field, value) => {
    setNewVersion((prevState) => ({
      ...prevState,
      [field]: value,
    }));
    console.log(newVersion);
  };

  return [newVersion, setNewVersion, inputField];
};

export default NewVersionHook;
