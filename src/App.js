import React from 'react';
import Carousels from './containers/carousels'
import './App.css';
import DrawingPage from './containers/drawingPage';

function App() {
  return (
    <div className="App">
        <Carousels/>
        <DrawingPage />
    </div>
  )
}

export default App;
