// import React, { useState } from "react";

// function App() {
//   const [input1, setInput1] = useState("");
//   const [input2, setInput2] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div>
//       {currentPage === 1 && (
//         <div>
//           <input
//             type="text"
//             value={input1}
//             onChange={(e) => setInput1(e.target.value)}
//           />
//           <button onClick={handleNextPage}>Next</button>
//         </div>
//       )}
//       {currentPage === 2 && (
//         <NextComponent input1={input1} input2={input2} />
//       )}
//       {currentPage === 2 && (
//         <div>
//           <input
//             type="text"
//             value={input2}
//             onChange={(e) => setInput2(e.target.value)}
//           />
//           <button onClick={handlePrevPage}>Prev</button>
//         </div>
//       )}
//     </div>
//   );
// }

// function NextComponent({ input1, input2 }) {
//   return (
//     <div>
//       <p>Input 1: {input1}</p>
//       <p>Input 2: {input2}</p>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import API from './movie/API'
import Form from './practices/Form'

function App() {
  return (
    <div>
<Form />
    </div>
  )
}

export default App

