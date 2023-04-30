// Form.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import InputOne from "./InputOne";
import InputTwo from "./InputTwo";

const Form = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  const handleNext = (value) => {
    setName(value);
    setStep(step + 1);
  };

  const handlePrevious = (value) => {
    setEmail(value);
    setStep(step - 1);
  };

  const handleSubmit = (value) => {
    setEmail(value);
    history.push("/results", { name, email });
  };

  return (
    <div>
      {step === 1 && <InputOne onNext={handleNext} />}
      {step === 2 && (
        <InputTwo
          onPrevious={handlePrevious}
          onSubmit={handleSubmit}
          name={name}
        />
      )}
    </div>
  );
};

export default Form;
