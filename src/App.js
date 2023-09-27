import "./App.css";

import React, { useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("red");
  const newButtonColor = backgroundColor === "red" ? "blue" : "red";

  const handleChangeColor = () => {
    setBackgroundColor(newButtonColor);
  };

  return (
    <div className="App">
      <button style={{ backgroundColor }} onClick={handleChangeColor}>
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
