import React, { useState } from 'react';

const ToolsHook = () => {
  const [tool, setTool] = useState('');

  const inputTool = (e) => {
    setTool(e.target.value);
  };

  return [tool, setTool, inputTool];
};

export default ToolsHook;
