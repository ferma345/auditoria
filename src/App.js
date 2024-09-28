import React from 'react';
import './App.css';
import Quiz from './Components/Quiz'; // Importa el componente Quiz

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido al Quiz</h1>
        <Quiz /> {/* Renderiza el componente Quiz */}
      </header>
    </div>
  );
}

export default App;

