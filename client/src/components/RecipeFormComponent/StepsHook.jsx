import React, { useState } from 'react';

const StepsHook = () => {
  const [step, setStep] = useState('');

  const inputStep = (e) => {
    setStep(e.target.value);
  };

  return [step, setStep, inputStep];
};

export default StepsHook;
