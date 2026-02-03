import React from 'react';
import { Check } from 'lucide-react';

const ProgressBar = ({ currentStep = 1, totalSteps = 4 }) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="progress-bar">
      <div className="progress-line"></div>
      {steps.map((step) => (
        <div 
          key={step} 
          className={`progress-step ${step === currentStep ? 'active' : ''} ${step < currentStep ? 'completed' : ''}`}
        >
          {step < currentStep ? <Check size={16} /> : step}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
