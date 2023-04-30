// InputOne.js
import React, { useState } from "react";

const InputOne = ({ onNext }) => {
  const [name, setName] = useState("");

  const handleNext = () => {
    onNext(name);
  };

  return (
    <div>
      <h2>Step 1</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default InputOne;
