// InputTwo.js
import React, { useState } from "react";

const InputTwo = ({ onPrevious, onSubmit, name }) => {
  const [email, setEmail] = useState("");

  const handlePrevious = () => {
    onPrevious(email);
  };

  const handleSubmit = () => {
    onSubmit(email);
  };

  return (
    <div>
      <h2>Step 2</h2>
      <p>Name: {name}</p>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputTwo;
