import React, { useState } from 'react';

function App() {
  const [displayText, setDisplayText] = useState("");

  const handleButtonOneClick = () => {
    setDisplayText("Hello");
  };

  const handleButtonTwoClick = () => {
    setDisplayText("World");
  };

  return (
    <div>
      <button onClick={handleButtonOneClick}>Button One</button>
      <button onClick={handleButtonTwoClick}>Button Two</button>
      <p>{displayText}</p>
    </div>
  );
}

export default App;