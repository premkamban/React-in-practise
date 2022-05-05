import './App.css';
import React from "react"
import Hooks from './Components/hooks';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <main>
        <Hooks />
      </main>
    </div>
  );
}

export default React.memo(App);
