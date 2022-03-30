import React from "react";
import "./App.css";
import Weather from "./components/weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <main>
        <Weather />
      </main>
    </div>
  );
}

export default App;
