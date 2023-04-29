import React, { useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

function App() {
  const [showComponent1, setShowComponent1] = useState(true);

  const handleButtonClick = (componentNumber) => {
    setShowComponent1(componentNumber === 1);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick(1)}>Show Component 1</button>
      <button onClick={() => handleButtonClick(2)}>Show Component 2</button>
      {showComponent1 ? <Component1 /> : <Component2 />}
    </div>
  );
}

export default App;