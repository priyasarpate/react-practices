import React, { useState } from "react";

function PageComponent() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      {currentPage === 1 && (
        <div>
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
          <br />
          <button onClick={handleNextPage}>Next</button>
          <button onClick={handlePrevPage}>Prev</button>
        </div>
      )}
      {currentPage === 2 && (
        <div>
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
          <br />
          <button onClick={handleNextPage}>Next</button>
          <button onClick={handlePrevPage}>Prev</button>
        </div>
      )}
    </div>
  );
}

export default PageComponent;
