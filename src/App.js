import React from "react";
import "./App.css";
import NasaList from "./nasadata"

function App()   {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>

      <NasaList />
    </div>
  );
}

export default App;
