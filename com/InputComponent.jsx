import React, { useState } from "react";

function InputComponent() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleNextClick = () => {
    // handle next button click
  };

  const handlePrevClick = () => {
    // handle prev button click
  };

  return (
    <div>
      <label>
        Input 1:
        <input type="text" value={inputValue1} onChange={handleInputChange1} />
      </label>
      <label>
        Input 2:
        <input type="text" value={inputValue2} onChange={handleInputChange2} />
      </label>
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default InputComponent;
